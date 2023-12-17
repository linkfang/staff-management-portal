import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import NavLayout from '@/components/layout/NavLayout'
import '@/styles/globals.css'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 120 },
  },
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </QueryClientProvider>
  )
}

export default trpc.withTRPC(MyApp)
