import { type SerializedStyles } from '@emotion/react'
import Head from 'next/head'
import { type ReactNode } from 'react'

/* Types */
type TPageLayout = { title: string; actions?: ReactNode; children: ReactNode; style?: SerializedStyles }

/* Styles */
const mainStyle = {
  marginBottom: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

/* Component */
const PageLayout = ({ title, actions, children, style }: TPageLayout) => {
  return (
    <>
      <Head>
        <title>{`${title} | Staff Management`}</title>
      </Head>

      <section css={mainStyle}>
        <h1 css={{ fontSize: 36 }}>{title}</h1>

        <div css={{ display: 'flex', gap: 40 }}>{actions}</div>
      </section>

      <section css={style}>{children}</section>
    </>
  )
}

export default PageLayout
