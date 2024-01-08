import { STYLES } from '@/constants/styles'
import ProjectsProgressCard from './ProjectsProgressCard'
import { trpc } from '@/utils/trpc'
import dayjs from 'dayjs'
import { Empty, Spin } from 'antd'
import { renderProjectStatus } from '@/utils/general'

const WorkingProjectsSection = () => {
  const { data: projectsData, isLoading } = trpc.findManyProject.useQuery(undefined, {
    select: (projects) => projects.filter((project) => renderProjectStatus(project) === 'On Going'),
  })

  const renderWorkingProjectsCard = () => {
    if (isLoading) {
      return (
        <div css={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spin />
        </div>
      )
    }

    if (projectsData?.length === 0) return <Empty css={{ marginTop: 30 }} />

    return (
      <div css={{ display: 'flex', flexWrap: 'wrap', gap: 30 }}>
        {projectsData?.map(({ customer, name, startDate, endDate }) => {
          const duration = dayjs(endDate).diff(startDate)
          const timeLeft = dayjs(endDate).diff()

          return (
            <ProjectsProgressCard
              key={`${customer}-${name}`}
              customer={customer}
              projectTitle={name}
              progress={Number(((timeLeft / duration) * 100).toFixed(0))}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <h2 css={STYLES.sectionTitle}>WORKING PROJECTS</h2>
      {renderWorkingProjectsCard()}
    </div>
  )
}

export default WorkingProjectsSection
