import { trpc } from '@/utils/trpc'
import { css } from '@emotion/react'
import PageLayout from '@/components/layout/PageLayout'

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'Home Page...' })
  return (
    <PageLayout title="Home">
      <p css={css({ margin: 0 })}>{hello.data?.greeting}</p>
    </PageLayout>
  )
}
