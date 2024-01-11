import { App, DatePicker, Form, Input, Modal, Select, SelectProps } from 'antd'
import { useEffect } from 'react'
import { trpc } from '@/utils/trpc'

/* Types */

type TProjectDetailModal = {
  shouldOpen: boolean
  // eslint-disable-next-line no-unused-vars
  setShouldOpen: (open: boolean) => void
  isLoading: boolean
} & (
  | {
      isEdit: true
      // eslint-disable-next-line no-unused-vars
      callbackFunc: (project: any) => void
      selectedProject: any
    }
  | {
      isEdit: false
      // eslint-disable-next-line no-unused-vars
      callbackFunc: (project: any) => void
      selectedProject: undefined
    }
)

/* Styles */
const formItemRow = { display: 'grid', gap: 25, gridTemplateColumns: '1fr 1fr' } as const

/* Functions */

/* Constants */
const selectOptions: SelectProps = { mode: 'multiple', allowClear: true, optionFilterProp: 'label' }

/* Components */
const ProjectDetailModal = ({
  shouldOpen,
  setShouldOpen,
  selectedProject,
  isLoading,
  callbackFunc,
  isEdit,
}: TProjectDetailModal) => {
  const [form] = Form.useForm<any>()
  const { notification } = App.useApp()
  const { setFieldsValue, resetFields } = form

  const projects = trpc.findManyProject.useQuery()
  const expertise = trpc.findManyExpertise.useQuery()
  const skills = trpc.findManySkill.useQuery()
  const employees = trpc.findManyPerson.useQuery()

  useEffect(() => {
    if (isEdit) {
      return
    }

    resetFields()
  }, [isEdit, setFieldsValue, resetFields])

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
        css={{ maxHeight: 550, overflow: 'auto', margin: '35px 0' }}
        onFinish={async ({ firstName, projects, lastName, preferredName, title, expertise, email }) => {
          if (isEdit) {
            callbackFunc({
              id: selectedProject.id,
              firstName,
              lastName,
              preferredName,
              projects,
              title,
              expertise,
            })
            return
          }

          // When is add
          if (employees.data?.find((person) => person.email === email)) {
            notification.error({
              message: 'Invalid Email',
              description: 'This email already exists, please use a different one.',
            })
            return
          }

          callbackFunc({
            firstName,
            lastName,
            preferredName,
            projects,
            title,
            expertise,
            email,
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
            {...selectOptions}
            placeholder="Select skills"
            loading={projects.isLoading}
            disabled={projects.isLoading}
            options={skills.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []}
          />
        </Form.Item>

        <Form.Item name="expertise" label="Expertise" rules={[{ required: true }]} initialValue={[]}>
          <Select
            {...selectOptions}
            loading={expertise.isLoading}
            disabled={expertise.isLoading}
            placeholder="Select expertise"
            options={expertise.data?.map(({ name, id }) => ({ label: name, value: id })) ?? []}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ProjectDetailModal
