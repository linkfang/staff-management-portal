import { STYLES } from '@/constants/styles'
import { css } from '@emotion/react'
import { Progress } from 'antd'
import { useEffect, useState } from 'react'

type TProjectsProgressCardProps = { customer: string; projectTitle: string; progress: number }

const ProjectsProgressCard = ({ customer, projectTitle, progress }: TProjectsProgressCardProps) => {
  const [percent, setPercentage] = useState(0)
  useEffect(() => {
    // To get an animated effect for progress bar
    const timer = setTimeout(() => setPercentage(progress), 10)

    return () => {
      clearTimeout(timer)
    }
  }, [progress])

  return (
    <div css={[STYLES.cardCtn, css({ minWidth: '200px' })]}>
      <div>
        <h3 css={{ fontSize: 20, marginBottom: 6 }}>{customer}</h3>
        <p css={{ fontSize: 14 }}>{projectTitle}</p>
      </div>
      <Progress percent={percent} />
    </div>
  )
}

export default ProjectsProgressCard
