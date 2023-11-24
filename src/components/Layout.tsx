import { ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HomeOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons'
import { COLORS } from '@/constants/styles'
import { useRouter } from 'next/router'
import { TEmotionCSS } from '@/type/general'

/* Constants */
const menuItems = [
  {
    href: '/',
    label: 'Home',
    icon: (iconSize: number) => <HomeOutlined style={{ fontSize: iconSize }} />,
  },
  {
    href: '/employees',
    label: 'Employees',
    icon: (iconSize: number) => <UserOutlined style={{ fontSize: iconSize }} />,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: (iconSize: number) => <ProjectOutlined style={{ fontSize: iconSize }} />,
  },
] as const

/* Styles */
const navMenuStyle: TEmotionCSS = {
  position: 'relative',
  width: 260,
  boxShadow: '0px 0px 20px rgba(62, 80, 113, 0.1)',
  padding: '50px 15px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}

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
  padding: '20px 0 20px 50px',
  borderRadius: 5,
  textDecoration: 'none',
  color: '#3B464D',
  fontWeight: 300,
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  transition: '0.3s ease-out',
  ':hover': {
    backgroundColor: COLORS.grey,
  },
}

/* Component */
const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter()
  const [activeDecoration, setActiveDecoration] = useState(132)
  const activeItemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setActiveDecoration(activeItemRef.current?.offsetTop ?? 0)
  }, [pathname])

  return (
    <div css={{ display: 'flex', gap: 45, height: '100svh' }}>
      <section css={navMenuStyle}>
        <i css={{ textAlign: 'center', height: 62 }}>Logo</i>

        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            css={item.href === pathname ? { ...menuItemStyle, ...activeItemStyle } : menuItemStyle}
            ref={item.href === pathname ? activeItemRef : null}
          >
            {item.icon(22)} {item.label}
          </Link>
        ))}

        {<span css={{ ...activeDecorationStyle, top: 16 + activeDecoration }}></span>}
      </section>

      <section css={{ flex: 1, padding: '50px 0' }}>{children}</section>
    </div>
  )
}

export default Layout
