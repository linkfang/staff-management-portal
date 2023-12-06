import PageLayout from '@/components/layout/PageLayout'
import { COLORS, SIZES } from '@/constants/styles'
import { RouterOutput } from '@/type/general'
import { trpc } from '@/utils/trpc'

import { Button, Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import dayjs from 'dayjs'

/* Styles */
const skillDotStyle = { height: 10, width: 10, borderRadius: 10, backgroundColor: COLORS.green }
const tableHeight = 'calc(100vh - 260px)'

/* Types */
type TPersonData = RouterOutput['findManyPerson'][0]

/* Constants */
const paginationConfig: TablePaginationConfig = {
  defaultPageSize: 15,
  pageSizeOptions: [15, 20, 40, 80],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (value) => <>Total {value} people</>,
}

const columns: ColumnsType<TPersonData> = [
  {
    title: 'Full Name',
    width: 190,
    fixed: 'left',
    render: (item) => `${item.preferredName || item.firstName} ${item.lastName}`,
  },
  { title: 'Title', dataIndex: 'title', width: 200 },
  {
    title: 'Expertise',
    width: 220,
    render: ({ expertise }) => <>{expertise.map((item: any) => item.name).join(', ')}</>,
  },
  {
    title: 'Projects',
    width: 85,
    render: ({ projects }: { projects: any[] }) => {
      const ongoingAmount = projects.filter(
        (project) => dayjs().isSameOrAfter(project.startDate) && dayjs().isSameOrBefore(project.endDate)
      ).length

      return (
        <>
          {ongoingAmount} of {projects.length}
        </>
      )
    },
  },
  { title: 'Email', dataIndex: 'email', width: 240 },
  { title: 'Action', width: 80, render: () => <Button>Edit</Button> },
]

/* Functions */
const renderSkillColumns = (skills: string[]): ColumnsType<TPersonData> =>
  skills.map((item) => ({
    title: item,
    width: 120,
    render: ({ personSkills }: TPersonData) => {
      const skillLevel = personSkills.find((personSkill) => personSkill?.skill?.name === item)?.level ?? 0
      const originalDots = Array.from({ length: 5 }).fill(false)
      const skillDots = originalDots.fill(true, 0, skillLevel)

      return (
        <div css={{ display: 'flex', gap: 5 }}>
          {skillDots.map((item, index) =>
            item ? (
              <div key={index} css={skillDotStyle}></div>
            ) : (
              <div key={index} css={{ ...skillDotStyle, backgroundColor: COLORS.grey }}></div>
            )
          )}
        </div>
      )
    },
  }))

/* Component */
const EmployeesPage = () => {
  const skills = trpc.findManySkill.useQuery({})
  const persons = trpc.findManyPerson.useQuery({})

  return (
    <PageLayout title="Employees">
      <Table
        style={{
          width: `calc(100vw - ${SIZES.bodyPaddingHorizontal * 2 + SIZES.navMenuExpand + 30}px)`,
          height: tableHeight,
        }}
        pagination={paginationConfig}
        columns={[...columns, ...renderSkillColumns(skills?.data?.map((item) => item.name) ?? [])]}
        dataSource={persons?.data}
        scroll={{ x: 100, y: tableHeight }}
        rowKey="email"
        loading={skills.isLoading || persons.isLoading}
      />
    </PageLayout>
  )
}

export default EmployeesPage
