import Avatar from '@/components/common/Avatar'
import InfoItem from '@/components/common/InfoItem'
import SkillInfoSection from '@/components/employeeDetail/SkillInfoSection'
import PageLayout from '@/components/layout/PageLayout'
import { DATE_FORMAT_STRINGS, statusToColorObj } from '@/constants/general'
import { COLORS, SIZES, STYLES } from '@/constants/styles'
import { RouterOutput } from '@/type/general'
import { renderMonoDateLabel } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { css } from '@emotion/react'
import { Empty, Spin, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import EmployeeDetailModal from '@/components/employeeDetail/EmployeeDetailModal'
import { isCompleted, isOnGoing, renderProjectStatus } from '@/utils/general'
import ActionButton from '@/components/common/ActionButton'

/* Types */
type TProjectsStatsProps = {
  value: string | number
  label: string
  color?: string
  isLoading?: boolean
}

type TProjectInEmployeeData = RouterOutput['findManyPerson'][0]['projects'][0]

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
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    render: (project: TProjectInEmployeeData) => {
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
  const trpcUtils = trpc.useUtils()
  const {
    data,
    isLoading: isLoadingDetail,
    refetch: refetchEmployee,
  } = trpc.findFirstPerson.useQuery(
    { id: Number(query?.id as string) ?? -1 },
    {
      enabled: !!query?.id,
    }
  )

  const { mutateAsync: mutatePerson, isLoading: isUpdating } = trpc.updateAPerson.useMutation({
    onSuccess: () => {
      setShouldOpen(false)
      refetchEmployee()
      trpcUtils.findManyPerson.invalidate()
    },
  })

  const [shouldOpen, setShouldOpen] = useState(false)

  if (!isLoadingDetail && !data)
    return (
      <PageLayout title="Employee Detail">
        <Empty description="No record found" />
      </PageLayout>
    )

  return (
    <PageLayout
      title="Employee Detail"
      actions={<ActionButton icon={<EditOutlined />} action={() => setShouldOpen(true)} />}
      style={css({ display: 'flex', flexDirection: 'column', paddingBottom: 50 })}
    >
      {/* Employee Info */}
      <div css={[STYLES.cardCtn, css({ flexDirection: 'row', paddingLeft: 120, paddingRight: 120 })]}>
        {isLoadingDetail || !data ? (
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
              <InfoItem
                label="First Name/Preferred Name"
                value={`${data.firstName}${data.preferredName && '/' + data.preferredName}`}
              />

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
              value={data?.projects?.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length ?? 0}
              color={COLORS.primary}
              label="Working Projects"
              isLoading={isLoadingDetail}
            />
            <ProjectsStats
              value={data?.projects?.filter(({ endDate }) => isCompleted(endDate)).length ?? 0}
              label="Completed Projects"
              isLoading={isLoadingDetail}
            />
          </div>

          <Table dataSource={data?.projects} columns={columns} loading={isLoadingDetail} rowKey="id" />
        </div>

        <SkillInfoSection />
      </div>

      <EmployeeDetailModal
        callbackFunc={mutatePerson}
        selectedPerson={data}
        isLoading={isUpdating}
        {...{ shouldOpen, setShouldOpen }}
      />
    </PageLayout>
  )
}

export default EmployeeDetail
