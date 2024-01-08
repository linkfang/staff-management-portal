import { Form, Input, Modal, Select } from 'antd'
import { ClickableDots } from '../common/ClickableDots'
import { STYLES } from '@/constants/styles'
import { useEffect, useState } from 'react'
import { trpc } from '@/utils/trpc'
import { TPersonData } from '@/type/general'

type TEmployeeDetailModal = {
  shouldOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setShouldOpen: (open: boolean) => void
  selectedPerson: TPersonData | undefined | null
  isLoading: boolean
  // eslint-disable-next-line no-unused-vars
  callbackFunc: (person: TPersonDataMutation) => void
}

type TPersonSkills = TPersonData['personSkills'][0]

type TPersonDataMutation = Omit<TPersonData, 'projects' | 'expertise'> & {
  projects: number[]
  expertise: number[]
}

type TPersonDataForm = Omit<TPersonDataMutation, 'personSkills'> & {
  personSkills: number[]
}

/* Styles */
const formItemRow = { display: 'grid', gap: 25, gridTemplateColumns: '1fr 1fr' } as const

const renderSelectedProjects = (personData: TPersonData | undefined) => {
  if (!personData) return []
  const { projects } = personData

  return projects.completed
    ? [...projects?.completed, ...projects?.onGoing, ...projects?.upcoming].map((project) => project.id)
    : projects.map((project) => project.id)
}

const EmployeeDetailModal = ({
  shouldOpen,
  setShouldOpen,
  selectedPerson,
  isLoading,
  callbackFunc,
}: TEmployeeDetailModal) => {
  const [form] = Form.useForm<TPersonDataForm>()
  const { setFieldsValue } = form

  const [personSkills, setPersonSkills] = useState<TPersonSkills[]>()

  const projects = trpc.findManyProject.useQuery()
  const expertise = trpc.findManyExpertise.useQuery()
  const skills = trpc.findManySkill.useQuery()

  const skillOptions = skills.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []

  useEffect(() => {
    if (!selectedPerson) return

    setFieldsValue({
      ...selectedPerson,
      projects: renderSelectedProjects(selectedPerson),
      expertise: selectedPerson.expertise.map((item) => item.id),
      personSkills: selectedPerson.personSkills.map((personSkill) => personSkill.skillId),
    })

    setPersonSkills(selectedPerson.personSkills)
  }, [selectedPerson, setFieldsValue])

  return (
    <Modal
      title={`Edit ${selectedPerson?.preferredName || selectedPerson?.firstName} ${selectedPerson?.lastName}`}
      open={shouldOpen}
      centered={true}
      onCancel={() => setShouldOpen(false)}
      onOk={form.submit}
      confirmLoading={isLoading}
      cancelButtonProps={{ disabled: isLoading }}
      closable={!isLoading}
      okText="Save"
    >
      <Form
        form={form}
        layout="vertical"
        css={{ maxHeight: 550, overflow: 'auto', margin: '35px 0' }}
        onFinish={async ({ firstName, projects, lastName, preferredName, title, expertise, email }) => {
          if (!selectedPerson || !personSkills) return
          callbackFunc({
            id: selectedPerson.id,
            firstName,
            lastName,
            preferredName,
            projects,
            title,
            expertise,
            personSkills,
            email,
            createdAt: null,
            updatedAt: null,
          })
        }}
      >
        <div css={{ ...formItemRow, gridTemplateColumns: '1fr 1fr 1fr' }}>
          <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="preferredName" label="Preferred Name">
            <Input />
          </Form.Item>
        </div>

        <div css={formItemRow}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>
        </div>

        <Form.Item name="projects" label="Projects">
          <Select
            mode="multiple"
            allowClear
            placeholder="Select projects"
            loading={projects.isLoading}
            disabled={projects.isLoading}
            options={projects.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []}
          />
        </Form.Item>

        <Form.Item name="expertise" label="Expertise" required>
          <Select
            mode="multiple"
            allowClear
            loading={expertise.isLoading}
            disabled={expertise.isLoading}
            placeholder="Select expertise"
            options={expertise.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []}
          />
        </Form.Item>

        <Form.Item name="personSkills" label="Skills">
          <Select
            mode="multiple"
            allowClear
            placeholder="Select skills"
            loading={skills.isLoading}
            disabled={skills.isLoading}
            options={skillOptions}
            onSelect={(value) => {
              if (!selectedPerson) return
              const selectedSkill = skills.data?.find((item) => item.id === value)
              if (!selectedSkill) return

              const newSelectedSkill = {
                level: 1,
                skillId: selectedSkill.id,
                personId: selectedPerson.id,
                skill: selectedSkill,
                updatedAt: null,
                createdAt: null,
              }

              setPersonSkills((pre) => (pre ? [...pre, newSelectedSkill] : [newSelectedSkill]))
            }}
            onDeselect={(value) => {
              if (!selectedPerson) return

              const selectedSkill = skills.data?.find((item) => item.id === value)
              if (!selectedSkill) return

              setPersonSkills((pre) => (pre ? pre.filter((item) => item.skillId !== value) : []))
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
                    (pre) => pre?.map((preItem) => (preItem.skillId === item.skillId ? { ...preItem, level } : preItem))
                  )
                }
              />
            </div>
          ))}
        </div>
      </Form>
    </Modal>
  )
}

export default EmployeeDetailModal
