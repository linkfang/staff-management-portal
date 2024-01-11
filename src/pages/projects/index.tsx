import ActionButton from '@/components/common/ActionButton'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { statusToColorObj } from '@/constants/general'
import { renderProjectStatus } from '@/utils/general'
import { renderMonoDateLabel } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { App, Button, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { TProjectData } from '@/type/general'
import ProjectDetailModal from '@/components/project/ProjecDetailModal'
import { useState } from 'react'

const columns: ColumnsType<TProjectData> = [
  { title: 'Name', dataIndex: 'name', width: 200, fixed: 'left', ellipsis: true },
  { title: 'Customer', dataIndex: 'customer', width: 220, ellipsis: true },
  {
    title: 'Status',
    width: 120,
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    render: (project: TProjectData) => {
      const status = renderProjectStatus(project)
      return (
        <Tag css={{ width: '100%', textAlign: 'center' }} color={statusToColorObj[status]}>
          {status}
        </Tag>
      )
    },
  },
  {
    title: 'Start Date',
    width: 120,
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    render: ({ startDate }: TProjectData) => renderMonoDateLabel(startDate),
  },
  {
    title: 'End Date',
    width: 120,
    sorter: (a, b) => a.endDate.localeCompare(b.endDate),
    render: ({ endDate }: TProjectData) => renderMonoDateLabel(endDate),
  },
  { title: 'Description', dataIndex: 'description', width: 200, ellipsis: true },
  {
    title: 'Skills',
    width: 200,
    ellipsis: true,
    render: ({ skills }: TProjectData) => <>{skills.map((skill) => skill.name).join(', ')}</>,
  },
  {
    title: 'Fields',
    width: 180,
    ellipsis: true,
    render: ({ fields }: TProjectData) => <>{fields.map((field) => field.name).join(', ')}</>,
  },
  {
    title: 'Team Members',
    width: 180,
    ellipsis: true,
    render: ({ persons }: TProjectData) => (
      <>{persons.map((person) => person.preferredName || person.firstName).join(', ')}</>
    ),
  },
]

// eslint-disable-next-line no-unused-vars
const renderActionColumn = (onEdit: (project: TProjectData) => void, onDelete: (project: TProjectData) => void) => ({
  title: 'Action',
  width: 180,
  render: (project: TProjectData) => (
    <div css={{ display: 'flex', gap: 10 }}>
      <Button onClick={() => onEdit(project)}>Edit</Button>
      <Button onClick={() => onDelete(project)}>Delete</Button>
    </div>
  ),
})

const ProjectsPage = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<TProjectData>()
  const { notification } = App.useApp()

  const { data, isLoading, refetch: refetchProjects } = trpc.findManyProject.useQuery()
  const { mutate: createProject } = trpc.createAProject.useMutation({
    onSuccess: (_, project) => {
      notification.success({ message: `Added ${project.name}` })
      onMutationSuccess()
    },
  })

  const { mutate: updateProject } = trpc.updateAProject.useMutation({
    onSuccess: (_, project) => {
      notification.success({ message: `Updated ${project.name}` })
      onMutationSuccess()
    },
  })

  const onMutationSuccess = () => {
    setShouldOpen(false)
    refetchProjects()
  }

  const onEditClick = (project: TProjectData) => {
    setSelectedProject(project)
    setShouldOpen(true)
  }

  const onDeleteClick = (project: TProjectData) => {
    setSelectedProject(project)
  }

  return (
    <PageLayout
      title="Projects"
      actions={
        <>
          <ActionButton
            icon={<AppstoreAddOutlined />}
            action={() => {
              setSelectedProject(undefined)
              setShouldOpen(true)
            }}
          />
        </>
      }
    >
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'projects' })}
        columns={[...columns, renderActionColumn(onEditClick, onDeleteClick)]}
        dataSource={data ?? []}
        loading={isLoading}
        rowKey="id"
      />

      {selectedProject ? (
        <ProjectDetailModal
          isEdit={true}
          callbackFunc={updateProject}
          selectedProject={selectedProject}
          {...{ shouldOpen, setShouldOpen, isLoading }}
        />
      ) : (
        <ProjectDetailModal
          isEdit={false}
          callbackFunc={createProject}
          selectedProject={selectedProject}
          {...{ shouldOpen, setShouldOpen, isLoading }}
        />
      )}
    </PageLayout>
  )
}
export default ProjectsPage
