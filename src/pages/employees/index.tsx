import { ClickableDots } from '@/components/common/ClickableDots'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { ALL_PATHS } from '@/constants/general'
import { STYLES } from '@/constants/styles'
import { RouterOutput } from '@/type/general'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'

import { Button, Form, Input, Modal, Select, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { useState } from 'react'

/* Styles */
const formItemRow = { display: 'grid', gap: 25, gridTemplateColumns: '1fr 1fr' } as const

/* Types */
type TPersonData = RouterOutput['findManyPerson'][0]
type TPersonSkillsBackend = TPersonData['personSkills'][0]
type TPersonSkills = Omit<TPersonSkillsBackend, 'createdAt' | 'updatedAt'>

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

const renderSelectedProjects = (personData: TPersonData | undefined) => {
  if (!personData) return []

  const { projects } = personData
  return [...projects.completed, ...projects.onGoing, ...projects.upcoming].map((project) => project.name)
}

/* Component */
const EmployeesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<TPersonData>()
  const [personSkills, setPersonSkills] = useState<TPersonSkills[]>()

  const [editForm] = Form.useForm()

  const skills = trpc.findManySkill.useQuery()
  const persons = trpc.findManyPerson.useQuery()
  const projects = trpc.findManyProject.useQuery()
  const expertise = trpc.findManyExpertise.useQuery()

  const editBtnCallback = (personData: TPersonData) => {
    if (!personData) return

    setSelectedPerson(personData)
    setPersonSkills(personData.personSkills)

    editForm.setFieldsValue({
      ...personData,
      projects: renderSelectedProjects(personData),
      expertise: personData.expertise.map((item) => item.name),
      personSkills: personData.personSkills.map((personSkill) => personSkill.skill.name),
    })

    setIsOpen(true)
  }

  const skillOptions = skills.data?.map(({ name }) => ({ label: name, value: name })) ?? []

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
        title={`Edit ${selectedPerson?.preferredName || selectedPerson?.firstName} ${selectedPerson?.lastName}`}
        open={isOpen}
        centered={true}
        onCancel={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
        okText="Save"
      >
        <Form form={editForm} layout="vertical" css={{ maxHeight: 550, overflow: 'auto', margin: '35px 0' }}>
          <div css={{ ...formItemRow, gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Form.Item name="firstName" label="First Name" required>
              <Input />
            </Form.Item>

            <Form.Item name="lastName" label="Last Name" required>
              <Input />
            </Form.Item>

            <Form.Item name="preferredName" label="Preferred Name">
              <Input />
            </Form.Item>
          </div>

          <div css={formItemRow}>
            <Form.Item name="title" label="Title" required>
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email" required>
              <Input />
            </Form.Item>
          </div>

          <Form.Item name="projects" label="Projects">
            <Select
              mode="multiple"
              allowClear
              placeholder="Select projects"
              options={projects.data?.map(({ name }) => ({ label: name, value: name })) ?? []}
            />
          </Form.Item>

          <Form.Item name="expertise" label="Expertise" required>
            <Select
              mode="multiple"
              allowClear
              placeholder="Select expertise"
              options={expertise.data?.map(({ name }) => ({ label: name, value: name })) ?? []}
            />
          </Form.Item>

          <Form.Item name="personSkills" label="Skills">
            <Select
              mode="multiple"
              allowClear
              placeholder="Select skills"
              options={skillOptions}
              onSelect={(_, skill) => {
                if (!selectedPerson) return
                const selectedSkill = skills.data?.find((item) => item.name === skill.value)
                if (!selectedSkill) return

                const newSelectedSkill = {
                  level: 1,
                  skillId: selectedSkill.id,
                  personId: selectedPerson.id,
                  skill: selectedSkill,
                }

                setPersonSkills((pre) => (pre ? [...pre, newSelectedSkill] : [newSelectedSkill]))
              }}
              onDeselect={(_, skill) => {
                if (!selectedPerson) return

                const selectedSkill = skills.data?.find((item) => item.name === skill.value)
                if (!selectedSkill) return

                setPersonSkills((pre) => (pre ? pre.filter((item) => item.skill.name !== skill.value) : []))
              }}
            />
          </Form.Item>

          <div css={{ display: 'flex', gap: 25, flexWrap: 'wrap' }}>
            {personSkills?.map((item) => (
              <div css={STYLES.skillCard} key={item.skillId}>
                <p css={{ marginBottom: 8 }}>{item.skill?.name}</p>
                <ClickableDots
                  skillLevel={item?.level}
                  onClick={(level: number) =>
                    setPersonSkills(
                      (pre) =>
                        pre?.map((preItem) => (preItem.skillId === item.skillId ? { ...preItem, level } : preItem))
                    )
                  }
                />
              </div>
            ))}
          </div>
        </Form>
      </Modal>
    </PageLayout>
  )
}

export default EmployeesPage
