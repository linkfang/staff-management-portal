import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { ALL_PATHS } from '@/constants/general'
import { RouterOutput } from '@/type/general'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'

import { Button, Form, Modal, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { useState } from 'react'

/* Types */
type TPersonData = RouterOutput['findManyPerson'][0]

/* Constants */
const columns: ColumnsType<TPersonData> = [
  {
    title: 'Full Name',
    width: 190,
    fixed: 'left',
    render: (item: TPersonData) => (
      <Link href={ALL_PATHS.employeeWithID(item.id)}>
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
      const onGoingB = b.projects.onGoing.length
      const onGoingA = a.projects.onGoing.length
      const totalB = b.projects.totalAmount
      const totalA = a.projects.totalAmount

      // Doing all 3 conditions to make the order change as little as possible
      if (onGoingB > onGoingA || totalB > totalA) return -1
      if (onGoingB < onGoingA || totalB < totalA) return 1
      return 0
    },
    render: ({ projects }: TPersonData) => (
      <>
        {projects.onGoing.length} of {projects.totalAmount}
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
const renderEditButton = (callback: (person: TPersonData) => void) => ({
  title: 'Action',
  width: 80,
  render: (person: TPersonData) => <Button onClick={() => callback(person)}>Edit</Button>,
})

/* Component */
const EmployeesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedName, setSelectedName] = useState('')

  const skills = trpc.findManySkill.useQuery()
  const persons = trpc.findManyPerson.useQuery()

  const editBtnCallback = ({ firstName, lastName }: TPersonData) => {
    setIsOpen(true)
    setSelectedName(`${firstName} ${lastName}`)
  }

  return (
    <PageLayout title="Employees">
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'people' })}
        columns={[
          ...columns,
          renderEditButton(editBtnCallback),
          ...renderSkillColumns(skills?.data?.map((item) => item.name) ?? []),
        ]}
        dataSource={persons?.data}
        loading={skills.isLoading || persons.isLoading}
        rowKey="email"
      />
      <Modal
        title={`Edit ${selectedName}`}
        open={isOpen}
        centered={true}
        onCancel={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
        okText="Save"
      ></Modal>
    </PageLayout>
  )
}

export default EmployeesPage
