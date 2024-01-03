import Avatar from '@/components/common/Avatar'
import InfoItem from '@/components/common/InfoItem'
import SkillInfoSection from '@/components/employeeDetail/SkillInfoSection'
import PageLayout from '@/components/layout/PageLayout'
import { DATE_FORMAT_STRINGS, PROJECT_STATUSES, statusToColorObj } from '@/constants/general'
import { COLORS, SIZES, STYLES } from '@/constants/styles'
import { RouterOutput } from '@/type/general'
import { renderMonoDateLabel } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { css } from '@emotion/react'
import { Empty, Spin, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

/* Types */
type TProjectsStatsProps = {
  value: string | number
  label: string
  color?: string
  isLoading?: boolean
}

type TProjectInEmployeeData = Exclude<RouterOutput['findFirstPerson']['projects'], undefined>[0]

/* Constants */
const columns: ColumnsType<TProjectInEmployeeData> = [
  {
    title: 'Project Name',
    width: 240,
    dataIndex: 'name',
  },
  {
    title: 'Status',
    width: 45,
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: ({ status }: TProjectInEmployeeData) => (
      <Tag css={{ width: '100%', textAlign: 'center' }} color={statusToColorObj[status]}>
        {status}
      </Tag>
    ),
  },
  {
    title: 'Start Date',
    width: 180,
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    render: ({ startDate }: TProjectInEmployeeData) => renderMonoDateLabel(startDate),
  },
  {
    title: 'End Date',
    width: 180,
    sorter: (a, b) => a.endDate.localeCompare(b.endDate),
    render: ({ endDate }: TProjectInEmployeeData) => renderMonoDateLabel(endDate),
  },
]

/* Components */
const ProjectsStats = ({ value, label, color, isLoading }: TProjectsStatsProps) => (
  <div>
    {isLoading ? (
      <div css={{ height: 41, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin />
      </div>
    ) : (
      <p css={{ color, fontSize: 36, fontWeight: 700, textAlign: 'center' }}>{value}</p>
    )}
    <p css={{ fontSize: 14 }}>{label}</p>
  </div>
)

const EmployeeDetail = () => {
  const { query } = useRouter()
  const { data, isLoading } = trpc.findFirstPerson.useQuery(
    { id: Number(query?.id as string) ?? 0 },
    {
      enabled: !!query?.id,
    }
  )

  if (!isLoading && !data)
    return (
      <PageLayout title="Employee Detail">
        <Empty description="No record found" />
      </PageLayout>
    )

  return (
    <PageLayout title="Employee Detail" style={css({ display: 'flex', flexDirection: 'column', paddingBottom: 50 })}>
      {/* Employee Info */}
      <div css={[STYLES.cardCtn, css({ flexDirection: 'row', paddingLeft: 120, paddingRight: 120 })]}>
        {isLoading || !data ? (
          <div css={{ height: 166, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spin />
          </div>
        ) : (
          <>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 120,
              }}
            >
              <Avatar
                firstName={data.preferredName || data.firstName}
                lastName={data.lastName}
                size={78}
                fontSize={28}
              />
              <p css={{ marginTop: 20, fontSize: 18, fontWeight: 700 }}>{data.preferredName || data.firstName}</p>
              <p>{data.lastName}</p>
            </div>
            <div css={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 30 }}>
              <InfoItem label="Title" value={data.title} />
              <InfoItem label="Email" value={data.email} />
              <InfoItem label="Expertise" value={data.expertise?.map((item) => item.name).join(', ')} />
              <InfoItem label="Preferred Name/First Name" value={`${data.preferredName}/${data.firstName}`} />

              <InfoItem
                label="Updated at"
                value={dayjs(data.updatedAt).format(DATE_FORMAT_STRINGS.yearMonthDayHrMin)}
              />
              <InfoItem
                label="Created at"
                value={dayjs(data.createdAt).format(DATE_FORMAT_STRINGS.yearMonthDayHrMin)}
              />
            </div>
          </>
        )}
      </div>

      <div css={{ flex: 1, marginTop: 25, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 25 }}>
        {/* Projects Info */}
        <div css={STYLES.cardCtn}>
          <h2 css={[STYLES.sectionTitle, css({ fontSize: 20 })]}>PROJECTS</h2>
          <div
            css={{
              backgroundColor: COLORS.lightblue,
              padding: '25px 115px',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: SIZES.borderRadius,
            }}
          >
            <ProjectsStats
              value={data?.projects?.filter((item) => item.status === PROJECT_STATUSES['On Going']).length ?? 0}
              color={COLORS.primary}
              label="Working Projects"
              isLoading={isLoading}
            />
            <ProjectsStats
              value={data?.projects?.filter((item) => item.status === PROJECT_STATUSES.Completed).length ?? 0}
              label="Completed Projects"
              isLoading={isLoading}
            />
          </div>

          <Table dataSource={data?.projects} columns={columns} loading={isLoading} rowKey="id" />
        </div>

        <SkillInfoSection />
      </div>
    </PageLayout>
  )
}

export default EmployeeDetail
