import { COLORS } from '@/constants/styles'
import { CaretDownOutlined } from '@ant-design/icons'
import { type SerializedStyles, css } from '@emotion/react'
import { Dropdown } from 'antd'
import Head from 'next/head'
import { ReactNode } from 'react'
import Avatar from '../common/Avatar'

/* Types */
type TPageLayout = { title: string; actions?: ReactNode; children: ReactNode; style?: SerializedStyles }

/* Constants */
const avatarMenuItems = [
  {
    label: 'Profile',
    key: 0,
  },
  {
    label: 'Log Out',
    key: 1,
  },
]

/* Styles */
const dropDownBtnStyle = css({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  width: 66,
  gap: 10,
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: 'none',
  padding: 5,
  borderRadius: 5,
  ':hover': {
    color: COLORS.primary,
    '& .anticon-caret-down': { top: 23 },
  },
})

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

        <div css={{ display: 'flex', gap: 40 }}>
          <div css={{ display: 'flex', alignItems: 'center' }}>{actions}</div>
        </div>
      </section>

      <section css={style}>{children}</section>
    </>
  )
}

export default PageLayout
