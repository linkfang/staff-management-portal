import { STYLES } from '@/constants/styles'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { css } from '@emotion/react'
import { Spin } from 'antd'
import { useRouter } from 'next/router'

const SkillInfoSection = () => {
  const { query } = useRouter()
  const { data, isLoading } = trpc.findFirstPerson.useQuery(
    { id: Number(query?.id as string) ?? 0 },
    {
      enabled: !!query?.id,
      select: (data) => data?.personSkills,
    }
  )

  return (
    <div css={STYLES.cardCtn}>
      <h2 css={[STYLES.sectionTitle, css({ fontSize: 20 })]}>SKILLS</h2>
      <div
        css={{
          display: 'flex',
          gap: 35,
          flexWrap: 'wrap',
          justifyContent: isLoading ? 'center' : 'flex-start',
        }}
      >
        {isLoading ? (
          <Spin css={{ marginTop: 30 }} />
        ) : (
          data?.map(({ skillId, level, skill: { name } }) => (
            <div key={skillId} css={STYLES.skillCard}>
              <p css={{ marginBottom: 8 }}>{name}</p>
              {renderSkillDots(level)}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SkillInfoSection
