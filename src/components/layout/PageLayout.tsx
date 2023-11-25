import { ReactNode } from 'react'

type TPageLayout = { title: string; children: ReactNode }
const PageLayout = ({ title, children }: TPageLayout) => {
  return (
    <section>
      <div className={''}>
        <h1>{title}</h1>
        <div>
          <span>search</span>
          <span>bell</span>
          <span>message</span>
          <span>avatar</span>
        </div>
      </div>

      <div>{children}</div>
    </section>
  )
}

export default PageLayout
