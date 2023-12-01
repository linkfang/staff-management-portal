import { COLORS } from '@/constants/styles'
import { BellOutlined, CaretDownOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Avatar, Dropdown } from 'antd'
import Head from 'next/head'
import { ReactNode } from 'react'

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
  transition: '0.2s ease-out',
  ':hover': {
    color: COLORS.primary,
    '& .anticon-caret-down': { top: 22 },
  },
})

/* Component */
const PageLayout = ({ title, children }: TPageLayout) => {
  return (
    <>
      <Head>
        <title>{title} | Staff Management</title>
      </Head>

      <section css={{ marginBottom: 25, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 css={{ fontSize: 36 }}>{title}</h1>

        <div css={{ display: 'flex', gap: 40 }}>
          <BellOutlined css={{ fontSize: 24, color: COLORS.textBlack }} />
          <Dropdown menu={{ items: avatarMenuItems }} trigger={['hover']}>
            <button css={dropDownBtnStyle}>
              <Avatar size={42} css={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
                JG
              </Avatar>
              <CaretDownOutlined
                css={{ fontSize: 12, position: 'absolute', top: 20, right: 0, transition: '0.2s ease-out' }}
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
