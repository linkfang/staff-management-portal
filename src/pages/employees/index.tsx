import PageLayout from '@/components/layout/PageLayout'
import { COLORS, SIZES } from '@/constants/styles'

import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

const mockData = [
  {
    firstName: 'Johnathon',
    lastName: 'Greenyfield',
    preferredName: '',
    title: 'Web Developer',
    email: 'john.g@domain.com',
    expertise: ['Web Development', 'Design'],
    skills: [
      { name: 'HTML', level: 4 },
      { name: 'CSS', level: 3 },
      { name: 'JavaScript', level: 4 },
    ],
    projects: { ongoing: [1, 3, 8], completed: [2, 4] },
  },
  {
    firstName: 'Bob',
    lastName: 'Blue',
    preferredName: '',
    title: 'Backend Developer',
    email: 'Bob.b@domain.com',
    expertise: ['Backend Development'],
    skills: [
      { name: 'JavaScript', level: 2 },
      { name: 'PostgreSQL', level: 1 },
    ],
    projects: { ongoing: [1], completed: [2, 4, 9] },
  },
]

const skillDotStyle = { height: 10, width: 10, borderRadius: 10, backgroundColor: COLORS.green }

// TODO: this data will be get from backend/db
// TODO: type will be defined/referred from tRPC later on
const renderSkillColumns: ColumnsType<any> = ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'].map((item) => ({
  title: item,
  width: 120,
  render: ({ skills }) => {
    const skillLevel = skills.find((skill: any) => skill.name === item)?.level ?? 0
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
  { title: 'Expertise', width: 220, render: ({ expertise }) => <>{expertise.join(', ')}</> },
  {
    title: 'Projects',
    width: 85,
    render: ({ projects }) => {
      const ongoingProjects = projects.ongoing.length
      return (
        <>
          {ongoingProjects} of {projects.completed.length + ongoingProjects}
        </>
      )
    },
  },
  { title: 'Email', dataIndex: 'email', width: 200 },
  ...renderSkillColumns,
  { title: 'Action', width: 80, render: () => <Button>Edit</Button> },
]

const EmployeesPage = () => {
  return (
    <PageLayout title="Employee">
      <Table
        style={{ width: `calc(100vw - ${SIZES.bodyPaddingHorizontal * 2 + SIZES.navMenuExpand + 30}px)` }}
        columns={columns}
        dataSource={mockData}
        scroll={{ x: 100 }}
        rowKey="email"
      />
    </PageLayout>
  )
}

export default EmployeesPage
