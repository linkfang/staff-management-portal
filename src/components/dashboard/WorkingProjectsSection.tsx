import { STYLES } from '@/constants/styles'
import ProjectsProgressCard from './ProjectsProgressCard'
import { trpc } from '@/utils/trpc'
import dayjs from 'dayjs'
import { Spin } from 'antd'

const WorkingProjectsSection = () => {
  const { data: projectsData, isLoading } = trpc.findManyProject.useQuery(
    {},
    {
      select: (projects) => projects.filter((project) => project.status === 'On Going'),
    }
  )
  return (
    <div>
      <h2 css={STYLES.sectionTitle}>WORKING PROJECTS</h2>
      {isLoading ? (
        <div css={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spin />
        </div>
      ) : (
        <div css={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 30 }}>
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
      )}
    </div>
  )
}

export default WorkingProjectsSection
