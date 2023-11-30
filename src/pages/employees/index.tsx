import PageLayout from '@/components/layout/PageLayout'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

const mockData = [
  {
    firstName: 'John',
    lastName: 'Green',
    preferredName: '',
    title: 'Web Developer',
    email: 'john.g@domain.com',
    expertise: ['Web Development'],
    skills: [
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 5 },
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
      { name: 'JavaScript', level: 4 },
      { name: 'PostgreSQL', level: 5 },
    ],
    projects: { ongoing: [1, 3, 8], completed: [2, 4] },
  },
]

// TODO: this data will be get from backend/db
// TODO: type will be defined/referred from tRPC later on
const renderSkillColumns: ColumnsType<any> = ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'].map((item) => ({
  title: item,
  render: (renderItem) => renderItem.skills.find((skill: any) => skill.name === item)?.level,
}))

const columns: ColumnsType<any> = [
  {
    title: 'Full Name',
    render: (item) => `${item.preferredName || item.firstName} ${item.lastName}`,
  },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Title', dataIndex: 'title' },
  { title: 'Expertise', dataIndex: 'expertise' },
  { title: 'Projects', dataIndex: 'projects' },
  ...renderSkillColumns,
]

const EmployeesPage = () => {
  return (
    <PageLayout title="Employee">
      <div>Content</div>
      <Table columns={columns} dataSource={mockData} />
    </PageLayout>
  )
}

export default EmployeesPage
