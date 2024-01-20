import { type ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HomeOutlined, ProjectOutlined, UserOutlined, MenuOutlined, LeftOutlined } from '@ant-design/icons'
import { COLORS, SIZES } from '@/constants/styles'
import { useRouter } from 'next/router'
import type { TEmotionCSS } from '@/type/general'
import Head from 'next/head'
import { ALL_PATHS } from '@/constants/general'
import ActionButton from '../common/ActionButton'
import Image from 'next/image'
import logo from '@/media/demo-logo.svg'

/* Constants */
const menuItems = [
  {
    href: ALL_PATHS.home,
    label: 'Home',
    icon: (iconSize: number) => <HomeOutlined css={{ fontSize: iconSize }} />,
  },
  {
    href: ALL_PATHS.employees,
    label: 'Employees',
    icon: (iconSize: number) => <UserOutlined css={{ fontSize: iconSize }} />,
  },
  {
    href: ALL_PATHS.projects,
    label: 'Projects',
    icon: (iconSize: number) => <ProjectOutlined css={{ fontSize: iconSize }} />,
  },
] as const

/* Styles */
const navMenuStyle: (openNav: boolean) => TEmotionCSS = (openNav) => ({
  zIndex: 99,
  backgroundColor: '#fff',
  position: 'fixed',
  width: SIZES.navMenuExpand,
  boxShadow: '0px 0px 20px rgba(62, 80, 113, 0.1)',
  padding: '50px 15px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  top: 0,
  bottom: 0,
  transition: 'all 0.3s ease-out',
  '@media(max-width: 760px)': {
    left: openNav ? 0 : -240,
  },
})

const activeItemStyle: TEmotionCSS = {
  backgroundColor: COLORS.primaryHighlight,
  color: COLORS.primary,
  ':hover': {
    backgroundColor: COLORS.primaryHighlight,
  },
}

const activeDecorationStyle: TEmotionCSS = {
  position: 'absolute',
  left: 15,
  width: 3,
  height: 30,
  borderRadius: 4,
  backgroundColor: COLORS.primary,
  transition: '0.3s ease-out',
}

const menuItemStyle: TEmotionCSS = {
  position: 'relative',
  padding: '20px 0 20px 35px',
  borderRadius: 5,
  textDecoration: 'none',
  color: '#3B464D',
  fontWeight: 300,
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  transition: '0.3s ease-out',
  ':hover': {
    backgroundColor: COLORS.lightGrey,
  },
}

/* Utils */
const includePath = (pathname: string, href: string) =>
  (pathname.includes(href) && href.length > 1) || pathname === href ? true : false

/* Component */
const NavLayout = ({ content }: { content: ReactNode }) => {
  const { pathname } = useRouter()
  const [activeDecoration, setActiveDecoration] = useState(132)
  const [openNav, setOpenNav] = useState(false)
  const activeItemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setActiveDecoration(activeItemRef.current?.offsetTop ?? 0)
  }, [pathname])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get a great idea on who are experts on required skills and are ready for next project with a glance. Add/edit individual employee or upload a csv file to create/update multiple ones."
        />
        <meta property="og:image" content="/staff-management-portal.jpg" />
        <meta property="og:title" content="Staff Management Portal" />
        <meta
          property="og:description"
          content="Get a great idea on who are experts on required skills and are ready for next project with a glance. Add/edit individual employee or upload a csv file to create/update multiple ones."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={{
          display: 'flex',
          height: '100svh',
          '@media(max-width: 760px)': {
            flexDirection: 'column',
          },
        }}
      >
        <div
          css={{
            display: 'none',
            '@media(max-width: 760px)': {
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)',
              padding: 20,
              backgroundColor: '#fff',
            },
          }}
        >
          <div css={{ position: 'absolute', left: 20 }}>
            <ActionButton icon={<MenuOutlined />} action={() => setOpenNav((pre) => !pre)} />
          </div>
          <Image src={logo} width={17} height={25} alt="company logo" />
        </div>

        <div
          css={{
            width: `calc(${SIZES.navMenuExpand}px + 30px)`,
            '@media(max-width: 760px)': {
              display: 'none',
            },
          }}
        ></div>

        <main
          css={{
            flex: 1,
            padding: `50px ${SIZES.bodyPaddingHorizontal}px`,
            '@media(max-width: 760px)': {
              padding: 20,
            },
          }}
        >
          {content}
        </main>

        <button
          css={{
            display: openNav ? 'block' : 'none',
            border: 'none',
            backgroundColor: 'rgba(0,0,0,0.3)',
            position: 'fixed',
            inset: 0,
            zIndex: 99,
          }}
          onClick={() => setOpenNav(false)}
        ></button>

        <nav css={navMenuStyle(openNav)}>
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
              '@media(max-width: 760px)': {
                display: 'none',
              },
            }}
          >
            <Image src={logo} width={35} height={52} alt="company logo" />
          </div>

          <span
            css={{
              height: 52,
              '@media(min-width: 760px)': {
                display: 'none',
              },
            }}
          ></span>
          <div
            css={{
              position: 'absolute',
              top: 20,
              '@media(min-width: 760px)': {
                display: 'none',
              },
            }}
          >
            <ActionButton icon={<LeftOutlined />} action={() => setOpenNav((pre) => !pre)} />
          </div>

          {menuItems.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              css={includePath(pathname, href) ? { ...menuItemStyle, ...activeItemStyle } : menuItemStyle}
              ref={includePath(pathname, href) ? activeItemRef : null}
            >
              {icon(22)} {label}
            </Link>
          ))}

          {<span css={{ ...activeDecorationStyle, top: 16 + activeDecoration }}></span>}
        </nav>
      </div>
    </>
  )
}

export default NavLayout
