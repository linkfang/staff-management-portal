import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import NavLayout from '@/components/layout/NavLayout'
import '@/styles/globals.css'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { useQueryClient } from '@tanstack/react-query'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = useQueryClient()
  queryClient.setDefaultOptions({ queries: { staleTime: 1000 * 120 } })
  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  )
}

export default trpc.withTRPC(MyApp)
