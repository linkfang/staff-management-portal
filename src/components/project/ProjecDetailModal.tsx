import { DatePicker, Form, Input, Modal, Select } from 'antd'
import { useEffect } from 'react'
import { trpc } from '@/utils/trpc'
import { displayName } from '@/utils/general'
import dayjs, { Dayjs } from 'dayjs'
import { DEFAULT_SELECT_OPTIONS } from '@/constants/general'
import { RouterInput, TProjectData } from '@/type/general'

/* Types */
type TProjectDataCreate = RouterInput['createAProject']
type TProjectDataUpdate = RouterInput['updateAProject']
type TProjectDataForm = Omit<TProjectDataCreate, 'startDate' | 'endDate'> & { startDate: Dayjs; endDate: Dayjs }

type TProjectDetailModal = {
  shouldOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setShouldOpen: (open: boolean) => void
  isLoading: boolean
} & (
  | {
      isEdit: true
      // eslint-disable-next-line no-unused-vars
      callbackFunc: (project: TProjectDataUpdate) => void
      selectedProject: TProjectData
    }
  | {
      isEdit: false
      // eslint-disable-next-line no-unused-vars
      callbackFunc: (project: TProjectDataCreate) => void
      selectedProject: undefined
    }
)

/* Styles */
const formItemRow = { display: 'grid', gap: 25, gridTemplateColumns: '1fr 1fr' } as const

/* Components */
const ProjectDetailModal = ({
  shouldOpen,
  setShouldOpen,
  selectedProject,
  isLoading,
  callbackFunc,
  isEdit,
}: TProjectDetailModal) => {
  const [form] = Form.useForm<TProjectDataForm>()
  const { setFieldsValue, resetFields } = form

  const projects = trpc.findManyProject.useQuery()
  const expertise = trpc.findManyExpertise.useQuery()
  const skills = trpc.findManySkill.useQuery()
  const employees = trpc.findManyPerson.useQuery()

  useEffect(() => {
    if (isEdit) {
      setFieldsValue({
        ...selectedProject,
        startDate: dayjs(selectedProject.startDate),
        endDate: dayjs(selectedProject.endDate),
        skills: selectedProject.skills.map((item) => item.id),
        persons: selectedProject.persons.map((item) => item.id),
        expertise: selectedProject.fields.map((item) => item.id),
      })
      return
    }

    if (shouldOpen) resetFields()
  }, [resetFields, setFieldsValue, selectedProject, isEdit, shouldOpen])

  return (
    <Modal
      title={isEdit ? `Edit ${selectedProject.name}` : 'Add a Project'}
      open={shouldOpen}
      centered={true}
      onCancel={() => {
        setShouldOpen(false)
        if (!isEdit) {
          resetFields()
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
        css={{ maxHeight: 555, overflow: 'auto', margin: '35px 0' }}
        onFinish={(project) => {
          if (isEdit) {
            callbackFunc({
              ...project,
              id: selectedProject.id,
              startDate: project.startDate.toISOString(),
              endDate: project.endDate.toISOString(),
            })
            return
          }

          // When is add
          callbackFunc({
            ...project,
            startDate: project.startDate.toISOString(),
            endDate: project.endDate.toISOString(),
          })
        }}
      >
        <div css={{ ...formItemRow, gridTemplateColumns: '1fr 1fr' }}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Project name" />
          </Form.Item>

          <Form.Item name="customer" label="Customer" rules={[{ required: true }]}>
            <Input placeholder="Customer name" />
          </Form.Item>
        </div>

        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea placeholder="Brief description" />
        </Form.Item>

        <div css={formItemRow}>
          <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]}>
            <DatePicker placeholder="Select start date" css={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}>
            <DatePicker placeholder="Select end date" css={{ width: '100%' }} />
          </Form.Item>
        </div>

        <Form.Item name="skills" label="Skills" rules={[{ required: true }]} initialValue={[]}>
          <Select
            {...DEFAULT_SELECT_OPTIONS}
            placeholder="Select skills"
            loading={projects.isLoading}
            disabled={projects.isLoading}
            options={skills.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []}
          />
        </Form.Item>

        <Form.Item name="expertise" label="Expertise" rules={[{ required: true }]} initialValue={[]}>
          <Select
            {...DEFAULT_SELECT_OPTIONS}
            loading={expertise.isLoading}
            disabled={expertise.isLoading}
            placeholder="Select expertise"
            options={expertise.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []}
          />
        </Form.Item>

        <Form.Item name="persons" label="Team members" initialValue={[]}>
          <Select
            {...DEFAULT_SELECT_OPTIONS}
            loading={expertise.isLoading}
            disabled={expertise.isLoading}
            placeholder="Select expertise"
            options={
              employees.data?.map((person) => ({
                label: `${displayName(person)} (${person.email})`,
                value: person.id,
              })) ?? []
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ProjectDetailModal
