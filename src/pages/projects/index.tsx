import ActionButton from '@/components/common/ActionButton'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { statusToColorObj } from '@/constants/general'
import { renderProjectStatus } from '@/utils/general'
import { renderMonoDateLabel } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { App, Button, Popconfirm, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { AppstoreAddOutlined } from '@ant-design/icons'
import type { RouterOutput, TProjectData } from '@/type/general'
import ProjectDetailModal from '@/components/project/ProjectDetailModal'
import { useState } from 'react'
import MoreOptions from '@/components/common/MoreOptions'

type TProjectResDeleted = RouterOutput['deleteAProject']

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

const renderActionColumn = (
  onEdit: (project: TProjectData) => void,
  onDelete: (project: TProjectData) => Promise<TProjectResDeleted>,
  isDeletingProject: boolean
) => ({
  title: 'Action',
  width: 180,
  render: (project: TProjectData) => (
    <div css={{ display: 'flex', gap: 10 }}>
      <Button onClick={() => onEdit(project)}>Edit</Button>
      <Popconfirm
        placement="left"
        title={`Delete Project - ${project.name}?`}
        onConfirm={() => onDelete(project)}
        cancelButtonProps={{ disabled: isDeletingProject }}
      >
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  ),
})

const ProjectsPage = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<TProjectData>()
  const { notification } = App.useApp()

  const { data, isFetching, refetch: refetchProjects } = trpc.findManyProject.useQuery()
  const { mutate: createProject, isLoading: isCreating } = trpc.createAProject.useMutation({
    onSuccess: (_, project) => {
      notification.success({ message: `Added ${project.name}` })
      onMutationSuccess()
    },
  })

  const { mutate: updateProject, isLoading: isUpdating } = trpc.updateAProject.useMutation({
    onSuccess: (_, project) => {
      notification.success({ message: `Updated ${project.name}` })
      onMutationSuccess()
    },
  })

  const { mutateAsync: deleteProject, isLoading: isDeletingProject } = trpc.deleteAProject.useMutation({
    onSuccess: (project) => {
      notification.success({ message: `Deleted ${project.name}` })
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

  const onDeleteClick = async (project: TProjectData) => deleteProject(project.id)

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
          <ActionButton icon={<MoreOptions />} />
        </>
      }
    >
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'projects' })}
        columns={[...columns, renderActionColumn(onEditClick, onDeleteClick, isDeletingProject)]}
        dataSource={data ?? []}
        loading={isFetching}
        rowKey="id"
      />

      {selectedProject ? (
        <ProjectDetailModal
          isEdit={true}
          callbackFunc={updateProject}
          selectedProject={selectedProject}
          isLoading={isUpdating}
          {...{ shouldOpen, setShouldOpen }}
        />
      ) : (
        <ProjectDetailModal
          isEdit={false}
          callbackFunc={createProject}
          selectedProject={selectedProject}
          isLoading={isCreating}
          {...{ shouldOpen, setShouldOpen }}
        />
      )}
    </PageLayout>
  )
}
export default ProjectsPage
