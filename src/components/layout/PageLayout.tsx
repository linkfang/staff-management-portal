import { COLORS } from '@/constants/styles'
import { BellOutlined, CaretDownOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Dropdown } from 'antd'
import Head from 'next/head'
import { ReactNode } from 'react'

/* Types */
type TPageLayout = { title: string; children: ReactNode }

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

const avatarStyle = {
  backgroundColor: '#fde3cf',
  color: '#f56a00',
  fontSize: 16,
  width: 42,
  height: 42,
  borderRadius: 42,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const mainStyle = {
  marginBottom: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

/* Component */
const PageLayout = ({ title, children }: TPageLayout) => {
  return (
    <>
      <Head>
        <title>{`${title} | Staff Management`}</title>
      </Head>

      <section css={mainStyle}>
        <h1 css={{ fontSize: 36 }}>{title}</h1>

        <div css={{ display: 'flex', gap: 40 }}>
          <BellOutlined css={{ fontSize: 24, color: COLORS.textBlack }} />
          <Dropdown menu={{ items: avatarMenuItems }} trigger={['hover']} css={{ backgroundColor: 'transparent' }}>
            <button css={dropDownBtnStyle}>
              <div css={avatarStyle}>JG</div>
              <CaretDownOutlined
                css={{ fontSize: 12, position: 'absolute', top: 20, right: 0, transition: '0.2s 0.15s ease-out' }}
              />
            </button>
          </Dropdown>
        </div>
      </section>

      <section>{children}</section>
    </>
  )
}

export default PageLayout
