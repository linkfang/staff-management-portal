import { COLORS, STYLES } from '@/constants/styles'
import { ReactNode } from 'react'

type TActionButtonProps = { icon: ReactNode; action?: () => void }
const ActionButton = ({ icon, action }: TActionButtonProps) => (
  <button
    onClick={action}
    css={{
      ...STYLES.buttonWithoutStyle,
      '& span': {
        fontSize: 24,
        color: COLORS.textBlack,
        transition: 'all 0.3s ease-out',
        ':hover': { color: COLORS.primary },
      },
    }}
  >
    {icon}
  </button>
)

export default ActionButton
