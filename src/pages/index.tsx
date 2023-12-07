import PageLayout from '@/components/layout/PageLayout'
import MyProjectsSection from '@/components/dashboard/MyProjectsSection'

export default function Home() {
  return (
    <PageLayout title="Home">
      <MyProjectsSection />
    </PageLayout>
  )
}
