import PageLayout from '@/components/layout/PageLayout'
import { COLORS, SIZES } from '@/constants/styles'
import { trpc } from '@/utils/trpc'

import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'

const skillDotStyle = { height: 10, width: 10, borderRadius: 10, backgroundColor: COLORS.green }

// TODO: this data will be get from backend/db
// TODO: type will be defined/referred from tRPC later on
const renderSkillColumns: ColumnsType<any> = ['HTML', 'CSS', 'TypeScript', 'PostgreSQL'].map((item) => ({
  title: item,
  width: 120,
  render: ({ personSkills }) => {
    const skillLevel = personSkills.find((personSkill: any) => personSkill.skill.name === item)?.level ?? 0
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

const columns: ColumnsType<any> = [
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
  { title: 'Email', dataIndex: 'email', width: 200 },
  ...renderSkillColumns,
  // { title: 'Action', width: 80, render: () => <Button>Edit</Button> },
]

const EmployeesPage = () => {
  const persons = trpc.findManyPerson.useQuery({
    include: { expertise: {}, personSkills: { include: { skill: {} } }, projects: {} },
  })
  console.log(persons.data)
  return (
    <PageLayout title="Employee">
      {/* <Table
        style={{ width: `calc(100vw - ${SIZES.bodyPaddingHorizontal * 2 + SIZES.navMenuExpand + 30}px)` }}
        columns={columns}
        dataSource={persons?.data}
        scroll={{ x: 100 }}
        rowKey="email"
      /> */}
    </PageLayout>
  )
}

export default EmployeesPage
