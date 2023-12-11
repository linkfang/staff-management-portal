import { STYLES } from '@/constants/styles'
import ProjectsProgressCard from './ProjectsProgressCard'

const WorkingProjectsSection = () => {
  return (
    <div>
      <h2 css={STYLES.sectionTitle}>WORKING PROJECTS</h2>
      <div css={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 30 }}>
        <ProjectsProgressCard customer="Customer" projectTitle="Project Name" progress={45} />
        <ProjectsProgressCard customer="Customer" projectTitle="Project Name" progress={12} />
        <ProjectsProgressCard customer="Customer" projectTitle="Project Name" progress={80} />
        <ProjectsProgressCard customer="Customer" projectTitle="Project Name" progress={96} />
      </div>
    </div>
  )
}

export default WorkingProjectsSection
