import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import NavLayout from '@/components/layout/NavLayout'
import '@/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  )
}

export default trpc.withTRPC(MyApp)
