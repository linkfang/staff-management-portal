import PageLayout from '@/components/layout/PageLayout'
import ProjectsOverviewSection from '@/components/dashboard/ProjectsOverviewSection'
import WorkingProjectsSection from '@/components/dashboard/WorkingProjectsSection'
import { css } from '@emotion/react'

export default function Home() {
  return (
    <PageLayout
      title="Home"
      style={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        paddingBottom: 50,
      })}
    >
      <ProjectsOverviewSection />
      <WorkingProjectsSection />
    </PageLayout>
  )
}
