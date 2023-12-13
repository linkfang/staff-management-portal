import Avatar from '@/components/common/Avatar'
import InfoItem from '@/components/common/InfoItem'
import PageLayout from '@/components/layout/PageLayout'
import { DATE_FORMAT_STRINGS } from '@/constants/general'
import { STYLES } from '@/constants/styles'
import { trpc } from '@/utils/trpc'
import { css } from '@emotion/react'
import { Empty, Spin } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

const EmployeeDetail = () => {
  const { query } = useRouter()
  const { data, isLoading } = trpc.findFirstPerson.useQuery({ where: { id: Number(query?.id as string) ?? 0 } })
  console.log({ data })

  if (!isLoading && !data)
    return (
      <PageLayout title="Employee Detail">
        <Empty description="No record found" />
      </PageLayout>
    )

  return (
    <PageLayout title="Employee Detail">
      <div css={[STYLES.cardCtn, css({ flexDirection: 'row', paddingLeft: 120, paddingRight: 120 })]}>
        {isLoading || !data ? (
          <div css={{ height: 166, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spin />
          </div>
        ) : (
          <>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 120,
              }}
            >
              <Avatar {...data} size={78} fontSize={28} />
              <p css={{ marginTop: 20, fontSize: 18, fontWeight: 700 }}>{data.firstName}</p>
              <p>{data.lastName}</p>
            </div>
            <div css={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 30 }}>
              <InfoItem label="Title" value={data.title} />
              <InfoItem label="Email" value={data.email} />
              <InfoItem label="Expertise" value={data.expertise.map((item) => item.name).join(', ')} />
              <InfoItem
                label="Updated at"
                value={dayjs(data.updatedAt).format(DATE_FORMAT_STRINGS.yearMonthDayHrMin)}
              />
              <InfoItem
                label="Created at"
                value={dayjs(data.createdAt).format(DATE_FORMAT_STRINGS.yearMonthDayHrMin)}
              />
            </div>
          </>
        )}
      </div>
    </PageLayout>
  )
}

export default EmployeeDetail
