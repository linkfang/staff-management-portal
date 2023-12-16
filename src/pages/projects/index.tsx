import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { statusToColorObj } from '@/constants/general'
import { RouterOutput } from '@/type/general'
import { renderMonoDateLabel } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { Button, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

type TProjectData = RouterOutput['findManyProject'][0]

const columns: ColumnsType<TProjectData> = [
  { title: 'Name', dataIndex: 'name', width: 200, fixed: 'left', ellipsis: true },
  { title: 'Customer', dataIndex: 'customer', width: 220, ellipsis: true },
  {
    title: 'Status',
    width: 120,
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: ({ status }: TProjectData) => (
      <Tag css={{ width: '100%', textAlign: 'center' }} color={statusToColorObj[status]}>
        {status}
      </Tag>
    ),
  },
  {
    title: 'Start Date',
    width: 120,
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    render: ({ startDate }: TProjectData) => renderMonoDateLabel(startDate),
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
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
  {
    title: 'Action',
    width: 180,
    render: () => (
      <div css={{ display: 'flex', gap: 10 }}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    ),
  },
]

const ProjectsPage = () => {
  const { data, isLoading } = trpc.findManyProject.useQuery()
  return (
    <PageLayout title="Projects">
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'projects' })}
        columns={columns}
        dataSource={data ?? []}
        loading={isLoading}
        rowKey="name"
      />
    </PageLayout>
  )
}
export default ProjectsPage
