import Avatar from '@/components/common/Avatar'
import InfoItem from '@/components/common/InfoItem'
import PageLayout from '@/components/layout/PageLayout'
import { STYLES } from '@/constants/styles'
import { css } from '@emotion/react'

const EmployeeDetail = () => {
  return (
    <PageLayout title="Employee Detail">
      <div css={[STYLES.cardCtn, css({ flexDirection: 'row', paddingLeft: 120, paddingRight: 120 })]}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 120,
          }}
        >
          <Avatar firstName="Amber" lastName="Zhou" size={78} fontSize={28} />
          <p css={{ marginTop: 20, fontSize: 18, fontWeight: 700 }}>Amber</p>
          <p>Zhou</p>
        </div>
        <div css={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 30 }}>
          <InfoItem label="Title" value="Web Developer" />
          <InfoItem label="Email" value="some@outlook.com" />
          <InfoItem label="Title" value="Web Developer" />
          <InfoItem label="Expertise" value="Web Development" />
          <InfoItem label="Updated at" value="2023-12-10" />
        </div>
      </div>
    </PageLayout>
  )
}

export default EmployeeDetail
