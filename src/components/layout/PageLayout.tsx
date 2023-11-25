import Head from 'next/head'
import { ReactNode } from 'react'

type TPageLayout = { title: string; children: ReactNode }

const PageLayout = ({ title, children }: TPageLayout) => {
  return (
    <>
      <Head>
        <title>{title} | Staff Management</title>
      </Head>

      <section css={{ marginBottom: 25, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 css={{ fontSize: 36 }}>{title}</h1>
        <div css={{ display: 'flex', gap: 40 }}>
          <span>Search</span>
          <span>Bell</span>
          <span>Message</span>
          <span>Avatar</span>
        </div>
      </section>

      <section>{children}</section>
    </>
  )
}

export default PageLayout
