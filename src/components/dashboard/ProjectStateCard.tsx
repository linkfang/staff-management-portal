import { COLORS, SIZES } from '@/constants/styles'
import { css } from '@emotion/react'
import { Spin } from 'antd'

type TProjectStateCardProps = {
  title: string
  number?: number
  icon: any
  color: string
  isLoading: boolean
}

const cardCtnStyle = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
  padding: '30px 40px',
  borderRadius: SIZES.borderRadius,
})

const iconStyle = (color: string) =>
  css({
    height: 60,
    width: 60,
    borderRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${color}15`,
  })

const ProjectStateCard = ({ title, number = 0, icon, color, isLoading = true }: TProjectStateCardProps) => {
  return (
    <div css={cardCtnStyle}>
      <h3 css={{ color: COLORS.textBlack, fontWeight: 100, fontSize: 20 }}>{title}</h3>
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p css={{ fontSize: 48, fontWeight: 700, color }}>{isLoading ? <Spin /> : number}</p>
        <div css={iconStyle(color)}>{icon}</div>
      </div>
    </div>
  )
}

export default ProjectStateCard
