import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import NavLayout from '@/components/layout/NavLayout'
import '@/styles/globals.css'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { useQueryClient } from '@tanstack/react-query'
import { App, ConfigProvider, notification } from 'antd'

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
    <ConfigProvider
      theme={{
        token: { fontSize: 16 },
        components: { Table: { fontSize: 14 }, DatePicker: { fontSize: 14 }, Button: { fontSize: 14 } },
      }}
    >
      <App>
        <NavLayout>
          <Component {...pageProps} />
        </NavLayout>
        {contextHolder}
      </App>
    </ConfigProvider>
  )
}

export default trpc.withTRPC(MyApp)
