import { COLORS, STYLES } from '@/constants/styles'
import { Progress } from 'antd'

type TProjectsProgressCardProps = { customer: string; projectTitle: string; progress: number }

const ProjectsProgressCard = ({ customer, projectTitle, progress }: TProjectsProgressCardProps) => {
  return (
    <div css={STYLES.cardCtn}>
      <div>
        <h3 css={{ fontSize: 20, color: COLORS.textBlack, marginBottom: 6 }}>{customer}</h3>
        <p css={{ fontSize: 14 }}>{projectTitle}</p>
      </div>
      <Progress percent={progress} />
    </div>
  )
}

export default ProjectsProgressCard
