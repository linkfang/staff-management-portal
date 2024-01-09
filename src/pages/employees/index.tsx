import EmployeeDetailModal from '@/components/employeeDetail/EmployeeDetailModal'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { ALL_PATHS } from '@/constants/general'
import { TPersonData } from '@/type/general'
import { isOnGoing } from '@/utils/general'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'

import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { useState } from 'react'

import { UserAddOutlined } from '@ant-design/icons'
import ActionButton from '@/components/common/ActionButton'

/* Constants */
const columns: ColumnsType<TPersonData> = [
  {
    title: 'Full Name',
    width: 190,
    fixed: 'left',
    render: (item: TPersonData) => (
      <Link href={ALL_PATHS.employeeWithID(item?.id)}>
        {item.preferredName || item.firstName} {item.lastName}
      </Link>
    ),
  },
  { title: 'Title', dataIndex: 'title', width: 200, sorter: (a, b) => a.title.localeCompare(b.title) },
  {
    title: 'Expertise',
    width: 220,
    render: ({ expertise }: TPersonData) => <>{expertise.map((item: any) => item.name).join(', ')}</>,
  },
  {
    title: 'Projects',
    width: 100,
    sorter: (a, b) => {
      const onGoingB = b.projects.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length
      const onGoingA = a.projects.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length
      const totalB = b.projects.length
      const totalA = a.projects.length

      // Doing all 3 conditions to make the order change as little as possible
      if (onGoingB > onGoingA || totalB > totalA) return -1
      if (onGoingB < onGoingA || totalB < totalA) return 1
      return 0
    },
    render: ({ projects }: TPersonData) => (
      <>
        {projects.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length} of {projects.length}
      </>
    ),
  },
  { title: 'Email', dataIndex: 'email', width: 240 },
]

/* Functions */
const renderSkillColumns = (skills: string[]): ColumnsType<TPersonData> =>
  skills.map((item) => ({
    title: item,
    width: 120,
    sorter: (a, b) => {
      const skillLevelA = a.personSkills.find((personSkill) => personSkill?.skill?.name === item)?.level ?? 0
      const skillLevelB = b.personSkills.find((personSkill) => personSkill?.skill?.name === item)?.level ?? 0

      // Doing all 3 conditions to make the order change as little as possible
      if (skillLevelB > skillLevelA) return 1
      if (skillLevelB < skillLevelA) return -1
      return 0
    },
    render: ({ personSkills }: TPersonData) => {
      const skillLevel = personSkills.find((personSkill) => personSkill?.skill?.name === item)?.level ?? 0
      return renderSkillDots(skillLevel)
    },
  }))

// eslint-disable-next-line no-unused-vars
const renderEditButtonColumn = (callback: (person: TPersonData) => void) => ({
  title: 'Action',
  width: 80,
  render: (person: TPersonData) => <Button onClick={() => callback(person)}>Edit</Button>,
})

/* Component */
const EmployeesPage = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<TPersonData>()

  const skills = trpc.findManySkill.useQuery()
  const persons = trpc.findManyPerson.useQuery()

  const { mutateAsync: mutatePerson, isLoading } = trpc.updateAPerson.useMutation({
    onSuccess: () => {
      setShouldOpen(false)
      persons.refetch()
    },
  })

  const editBtnCallback = (personData: TPersonData) => {
    if (!personData) return

    setSelectedPerson(personData)
    setShouldOpen(true)
  }

  return (
    <PageLayout
      title="Employees"
      actions={
        <>
          <ActionButton
            icon={<UserAddOutlined />}
            action={() => {
              setSelectedPerson(undefined)
              setShouldOpen(true)
            }}
          />
        </>
      }
    >
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'people' })}
        columns={[
          ...columns,
          renderEditButtonColumn(editBtnCallback),
          ...renderSkillColumns(skills?.data?.map((item) => item.name) ?? []),
        ]}
        dataSource={persons?.data}
        loading={skills.isFetching || persons.isFetching}
        rowKey="email"
      />
      <EmployeeDetailModal callbackFunc={mutatePerson} {...{ shouldOpen, setShouldOpen, selectedPerson, isLoading }} />
    </PageLayout>
  )
}

export default EmployeesPage
