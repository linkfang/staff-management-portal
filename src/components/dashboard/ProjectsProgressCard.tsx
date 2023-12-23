import { STYLES } from '@/constants/styles'
import { css } from '@emotion/react'
import { Progress } from 'antd'

type TProjectsProgressCardProps = { customer: string; projectTitle: string; progress: number }

const ProjectsProgressCard = ({ customer, projectTitle, progress }: TProjectsProgressCardProps) => {
  return (
    <div css={[STYLES.cardCtn, css({ minWidth: '200px' })]}>
      <div>
        <h3 css={{ fontSize: 20, marginBottom: 6 }}>{customer}</h3>
        <p css={{ fontSize: 14 }}>{projectTitle}</p>
      </div>
      <Progress percent={progress} />
    </div>
  )
}

export default ProjectsProgressCard
