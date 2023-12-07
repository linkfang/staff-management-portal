import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { COLORS, SIZES } from '@/constants/styles'
import { RouterOutput } from '@/type/general'
import { trpc } from '@/utils/trpc'

import { Button, Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'

/* Styles */
const skillDotStyle = { height: 10, width: 10, borderRadius: 10, backgroundColor: COLORS.green }

/* Types */
type TPersonData = RouterOutput['findManyPerson'][0]

/* Constants */
const columns: ColumnsType<TPersonData> = [
  {
    title: 'Full Name',
    width: 190,
    fixed: 'left',
    render: (item: TPersonData) => `${item.preferredName || item.firstName} ${item.lastName}`,
  },
  { title: 'Title', dataIndex: 'title', width: 200, sorter: (a, b) => a.title.localeCompare(b.title) },
  {
    title: 'Expertise',
    width: 220,
    sorter: (a, b) => a.expertise[0]?.name.localeCompare(b.expertise[0]?.name),
    render: ({ expertise }: TPersonData) => <>{expertise.map((item: any) => item.name).join(', ')}</>,
  },
  {
    title: 'Projects',
    width: 100,
    sorter: (a, b) => {
      const onGoingB = b.projects.onGoing.length
      const onGoingA = a.projects.onGoing.length
      const totalB = b.projects.totalAmount
      const totalA = a.projects.totalAmount

      // Doing all 3 conditions to make the order change as little as possible
      if (onGoingB > onGoingA || totalB > totalA) return -1
      if (onGoingB < onGoingA || totalB < totalA) return 1
      return 0
    },
    render: ({ projects }: TPersonData) => (
      <>
        {projects.onGoing.length} of {projects.totalAmount}
      </>
    ),
  },
  { title: 'Email', dataIndex: 'email', width: 240 },
  // { title: 'Action', width: 80, render: () => <Button>Edit</Button> },
]

/* Functions */
const renderSkillColumns = (skills: string[]): ColumnsType<TPersonData> =>
  skills.map((item) => ({
    title: item,
    width: 120,
    sorter: (a, b) => {
      const skillLevelA = a.personSkills.find((personSkill) => personSkill?.skill?.name === item)?.level ?? 0
      const skillLevelB = b.personSkills.find((personSkill) => personSkill?.skill?.name === item)?.level ?? 0

      // Doing all 3 conditions to make the order change as little as possible
      if (skillLevelB > skillLevelA) return 1
      if (skillLevelB < skillLevelA) return -1
      return 0
    },
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
      {/* <Table
        {...TABLE_PROPS({ showTotalLabel: 'people' })}
        columns={[...columns, ...renderSkillColumns(skills?.data?.map((item) => item.name) ?? [])]}
        dataSource={persons?.data}
        loading={skills.isLoading || persons.isLoading}
        rowKey="email"
      /> */}
    </PageLayout>
  )
}

export default EmployeesPage
