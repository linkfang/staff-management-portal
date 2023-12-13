import { COLORS } from '@/constants/styles'

type TInfoItem = { label: string; value: string }

const InfoItem = ({ label, value }: TInfoItem) => {
  return (
    <div>
      <p css={{ color: COLORS.textGrey, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{label}</p>
      <p>{value}</p>
      <div css={{ height: 1, width: '100%', backgroundColor: COLORS.lightGrey, marginTop: 20 }}></div>
    </div>
  )
}

export default InfoItem
