import { COLORS, STYLES } from '@/constants/styles'
import { trpc } from '@/utils/trpc'
import ProjectStateCard from './ProjectStateCard'
import { CheckOutlined, ClockCircleOutlined, DesktopOutlined } from '@ant-design/icons'

function ProjectsOverviewSection() {
  const { data: projectsData, isLoading } = trpc.findManyProject.useQuery(
    {},
    {
      select: (projects) => {
        const projectStats = { upcoming: 0, ongoing: 0, completed: 0 }
        projects.forEach((project) => {
          switch (project.status) {
            case 'Upcoming':
              projectStats.upcoming++
              break
            case 'On Going':
              projectStats.ongoing++
              break
            case 'Completed':
              projectStats.completed++
              break
          }
        })
        return projectStats
      },
    }
  )

  return (
    <div>
      <h2 css={STYLES.sectionTitle}>PROJECTS OVERVIEW</h2>
      <div css={{ display: 'flex', gap: 30 }}>
        {[
          {
            title: 'Working Projects',
            color: COLORS.primary,
            number: projectsData?.ongoing,
            icon: <DesktopOutlined css={{ color: COLORS.primary, fontSize: 24 }} />,
          },
          {
            title: 'Upcoming Projects',
            color: COLORS.orange,
            number: projectsData?.upcoming,
            icon: <ClockCircleOutlined css={{ color: COLORS.orange, fontSize: 24 }} />,
          },
          {
            title: 'Completed Projects',
            color: COLORS.green,
            number: projectsData?.completed,
            icon: <CheckOutlined css={{ color: COLORS.green, fontSize: 24 }} />,
          },
        ].map(({ title, color, number, icon }) => (
          <ProjectStateCard key={title} title={title} color={color} number={number} icon={icon} isLoading={isLoading} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsOverviewSection
