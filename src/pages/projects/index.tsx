import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { DATA_FORMAT_STRINGS, PROJECT_STATUSES } from '@/constants/general'
import { SIZES } from '@/constants/styles'
import { RouterOutput } from '@/type/general'
import { trpc } from '@/utils/trpc'
import { Button, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'

type TProjectData = RouterOutput['findManyProject'][0]

const renderMonoDateLabel = (date: string) => (
  <span css={{ fontFamily: 'monospace' }}>{dayjs(date).format(DATA_FORMAT_STRINGS.yearMonthDay)}</span>
)

const statusToColorObj: Record<keyof typeof PROJECT_STATUSES, string> = {
  Pending: 'purple',
  'On Going': 'blue',
  Completed: 'green',
} as const

const columns: ColumnsType<TProjectData> = [
  { title: 'Name', dataIndex: 'name', width: 200, fixed: 'left' },
  { title: 'Customer', dataIndex: 'customer', width: 200 },
  {
    title: 'Status',
    width: 100,
    // render: ({ status }: TProjectData) => (
    //   <Tag css={{ width: '100%', textAlign: 'center' }} color={statusToColorObj[status]}>
    //     {status}
    //   </Tag>
    // ),
  },
  {
    title: 'Start Date',
    width: 110,
    render: ({ startDate }: TProjectData) => renderMonoDateLabel(startDate),
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    width: 110,
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
    render: ({ persons }: TProjectData) => (
      <>{persons.map((person) => person.preferredName || person.firstName).join(', ')}</>
    ),
  },
  {
    title: 'Action',
    width: 180,
    // render: () => (
    //   <div css={{ display: 'flex', gap: 10 }}>
    //     <Button>Edit</Button>
    //     <Button>Delete</Button>
    //   </div>
    // ),
  },
]

const ProjectsPage = () => {
  const { data, isLoading } = trpc.findManyProject.useQuery({})
  return (
    <PageLayout title="Projects">
      {/* <Table {...TABLE_PROPS} columns={columns} dataSource={data ?? []} loading={isLoading} rowKey="name" /> */}
    </PageLayout>
  )
}
export default ProjectsPage
