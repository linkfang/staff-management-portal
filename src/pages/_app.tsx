import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import NavLayout from '@/components/layout/NavLayout'
import '@/styles/globals.css'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { useQueryClient } from '@tanstack/react-query'
import { App, notification } from 'antd'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const MyApp: AppType = ({ Component, pageProps }) => {
  const [api, contextHolder] = notification.useNotification()
  const queryClient = useQueryClient()

  queryClient.setDefaultOptions({
    queries: { staleTime: 1000 * 120 },
    mutations: {
      onError: (err) => api.error({ message: 'Something Went Wrong', description: `${err}` }),
      onSuccess: () => api.success({ message: 'Operation Succeeded' }),
    },
  })

  return (
    <App>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
      {contextHolder}
    </App>
  )
}

export default trpc.withTRPC(MyApp)
