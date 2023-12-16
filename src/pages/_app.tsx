import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import NavLayout from '@/components/layout/NavLayout'
import '@/styles/globals.css'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  )
}

export default trpc.withTRPC(MyApp)
