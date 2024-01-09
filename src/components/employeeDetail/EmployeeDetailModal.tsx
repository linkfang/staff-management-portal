import { Form, Input, Modal, Select } from 'antd'
import { ClickableDots } from '../common/ClickableDots'
import { STYLES } from '@/constants/styles'
import { useEffect, useState } from 'react'
import { trpc } from '@/utils/trpc'
import { RouterInput, TPersonData } from '@/type/general'

/* Types */
type TPersonSkills = TPersonData['personSkills'][0]
type TCreatePersonData = RouterInput['createAPerson']
type TPersonDataUpdate = RouterInput['updateAPerson']
type TPersonDataForm = Omit<TCreatePersonData, 'personSkills'> & {
  personSkills: number[]
}

type TEmployeeDetailModal = {
  shouldOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setShouldOpen: (open: boolean) => void
  isLoading: boolean
} & (
  | {
      isEdit: true
      // eslint-disable-next-line no-unused-vars
      callbackFunc: (person: TPersonDataUpdate) => void
      selectedPerson: TPersonData
    }
  | {
      isEdit: false
      // eslint-disable-next-line no-unused-vars
      callbackFunc: (person: TCreatePersonData) => void
      selectedPerson: undefined
    }
)

/* Styles */
const formItemRow = { display: 'grid', gap: 25, gridTemplateColumns: '1fr 1fr' } as const

const renderSelectedProjects = (personData: TPersonData | undefined) => {
  if (!personData) return []
  const { projects } = personData

  return projects.map((project) => project.id)
}

const EmployeeDetailModal = ({
  shouldOpen,
  setShouldOpen,
  selectedPerson,
  isLoading,
  callbackFunc,
  isEdit,
}: TEmployeeDetailModal) => {
  const [form] = Form.useForm<TPersonDataForm>()
  const { setFieldsValue, resetFields } = form

  const [personSkills, setPersonSkills] = useState<TPersonSkills[]>([])

  const projects = trpc.findManyProject.useQuery()
  const expertise = trpc.findManyExpertise.useQuery()
  const skills = trpc.findManySkill.useQuery()

  const skillOptions = skills.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []

  useEffect(() => {
    if (isEdit) {
      setFieldsValue({
        ...selectedPerson,
        projects: renderSelectedProjects(selectedPerson),
        expertise: selectedPerson.expertise.map((item) => item.id),
        personSkills: selectedPerson.personSkills.map((personSkill) => personSkill.skillId),
      })
      setPersonSkills(selectedPerson.personSkills)
      return
    }

    resetFields()
    setPersonSkills([])
  }, [selectedPerson, isEdit, setFieldsValue, resetFields])

  return (
    <Modal
      title={
        isEdit
          ? `Edit ${selectedPerson?.preferredName || selectedPerson?.firstName} ${selectedPerson?.lastName}`
          : 'Add an Employee'
      }
      open={shouldOpen}
      centered={true}
      onCancel={() => {
        setShouldOpen(false)
        if (!isEdit) {
          resetFields()
          setPersonSkills([])
        }
      }}
      onOk={form.submit}
      confirmLoading={isLoading}
      cancelButtonProps={{ disabled: isLoading }}
      closable={!isLoading}
      okText={isEdit ? 'Save' : 'Add'}
    >
      <Form
        form={form}
        layout="vertical"
        css={{ maxHeight: 550, overflow: 'auto', margin: '35px 0' }}
        onFinish={async ({ firstName, projects, lastName, preferredName, title, expertise, email }) => {
          if (isEdit) {
            callbackFunc({
              id: selectedPerson.id,
              firstName,
              lastName,
              preferredName,
              projects,
              title,
              expertise,
              personSkills,
            })
            return
          }

          // When is add
          callbackFunc({
            firstName,
            lastName,
            preferredName,
            projects,
            title,
            expertise,
            personSkills,
            email,
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

          <Form.Item name="preferredName" label="Preferred Name" initialValue="">
            <Input />
          </Form.Item>
        </div>

        <div css={formItemRow}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input disabled={isEdit} />
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

        <Form.Item name="expertise" label="Expertise" rules={[{ required: true }]} initialValue={[]}>
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
              const selectedSkill = skills.data?.find((item) => item.id === value)
              if (!selectedSkill) return

              const newSelectedSkill = {
                level: 1,
                skillId: selectedSkill.id,
                personId: selectedPerson?.id || -1,
                skill: selectedSkill,
                updatedAt: null,
                createdAt: null,
              }

              setPersonSkills((pre) => (pre ? [...pre, newSelectedSkill] : [newSelectedSkill]))
            }}
            onDeselect={(value) => {
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
