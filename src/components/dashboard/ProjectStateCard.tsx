import { COLORS, STYLES } from '@/constants/styles'
import { css } from '@emotion/react'
import { Spin } from 'antd'

type TProjectStateCardProps = {
  title: string
  number?: number
  icon: any
  color: string
  isLoading: boolean
}

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
    <div css={STYLES.cardCtn}>
      <h3 css={{ color: COLORS.textBlack, fontWeight: 100, fontSize: 20 }}>{title}</h3>
      <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {isLoading ? <Spin /> : <p css={{ fontSize: 48, fontWeight: 700, color }}>{number}</p>}
        <div css={iconStyle(color)}>{icon}</div>
      </div>
    </div>
  )
}

export default ProjectStateCard
