import EmployeeDetailModal from '@/components/employee/EmployeeDetailModal'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { ALL_PATHS } from '@/constants/general'
import type { TPersonData } from '@/type/general'
import { displayName, isOnGoing } from '@/utils/general'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'

import { App, Button, Popconfirm, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { useState } from 'react'

import { UserAddOutlined, CloudUploadOutlined } from '@ant-design/icons'
import ActionButton from '@/components/common/ActionButton'
import MoreOptions from '@/components/common/MoreOptions'
import UploadEmployeeModal from '@/components/employee/UploadEmployeeModal'

/* Constants */
const columns: ColumnsType<TPersonData> = [
  {
    title: 'Full Name',
    width: 190,
    fixed: 'left',
    render: (item: TPersonData) => <Link href={ALL_PATHS.employeeWithID(item?.id)}>{displayName(item)}</Link>,
  },
  { title: 'Title', dataIndex: 'title', width: 200, sorter: (a, b) => a.title.localeCompare(b.title) },
  {
    title: 'Expertise',
    width: 220,
    render: ({ expertise }: TPersonData) => <>{expertise.map((item) => item.name).join(', ')}</>,
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
const renderEditButtonColumn = (editCallback: (person: TPersonData) => void, deleteCallback: (id: number) => void) => ({
  title: 'Action',
  width: 160,
  render: (person: TPersonData) => (
    <div css={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
      <Button onClick={() => editCallback(person)}>Edit</Button>
      <Popconfirm title={`Delete employee - ${displayName(person)}?`} onConfirm={() => deleteCallback(person.id)}>
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  ),
})

/* Component */
const EmployeesPage = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  const [openUpload, setOpenUpload] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<TPersonData>()
  const { notification } = App.useApp()

  const skills = trpc.findManySkill.useQuery()
  const persons = trpc.findManyPerson.useQuery()

  const onMutationSuccess = (message: string) => {
    setShouldOpen(false)
    persons.refetch()
    notification.success({ message })
  }

  const { mutate: updatePerson, isLoading } = trpc.updateAPerson.useMutation({
    onSuccess: (_, person) => onMutationSuccess(`Updated ${displayName(person)}`),
  })

  const { mutate: createPerson } = trpc.createAPerson.useMutation({
    onSuccess: (_, person) => onMutationSuccess(`Add ${displayName(person)}`),
  })

  const { mutateAsync: deletePerson } = trpc.deleteAPerson.useMutation({
    onSuccess: (response) => onMutationSuccess(`Deleted ${displayName(response[1])}`),
  })

  const editBtnCallback = (personData: TPersonData) => {
    if (!personData) return

    setSelectedPerson(personData)
    setShouldOpen(true)
  }

  const deleteCallback = (id: number) => deletePerson(id)

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
          <ActionButton icon={<CloudUploadOutlined />} action={() => setOpenUpload(true)} />
          <ActionButton icon={<MoreOptions />} />
        </>
      }
    >
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'people' })}
        columns={[
          ...columns,
          renderEditButtonColumn(editBtnCallback, deleteCallback),
          ...renderSkillColumns(skills?.data?.map((item) => item.name) ?? []),
        ]}
        dataSource={persons?.data}
        loading={skills.isFetching || persons.isFetching}
        rowKey="email"
      />

      {selectedPerson ? (
        <EmployeeDetailModal
          callbackFunc={updatePerson}
          isEdit={!!selectedPerson}
          {...{ shouldOpen, setShouldOpen, selectedPerson, isLoading }}
        />
      ) : (
        <EmployeeDetailModal
          callbackFunc={createPerson}
          isEdit={!!selectedPerson}
          {...{ shouldOpen, setShouldOpen, selectedPerson, isLoading }}
        />
      )}
      <UploadEmployeeModal {...{ openUpload, setOpenUpload }} />
    </PageLayout>
  )
}

export default EmployeesPage
