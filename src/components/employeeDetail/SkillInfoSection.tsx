import { COLORS, SIZES, STYLES } from '@/constants/styles'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { css } from '@emotion/react'
import { Spin } from 'antd'
import { useRouter } from 'next/router'

const SkillInfoSection = () => {
  const { query } = useRouter()
  const { data, isLoading } = trpc.findFirstPerson.useQuery(
    { where: { id: Number(query?.id as string) ?? 0 } },
    {
      enabled: !!query?.id,
      select: (data) => {
        const formattedSkills: Record<string, { name: string; level: number }[]> = {}
        data.personSkills?.forEach((item) => {
          let expertiseArr = formattedSkills[item.skill.field[0].name]
          if (!expertiseArr) expertiseArr = []
          expertiseArr.push({ name: item.skill.name, level: item.level })

          formattedSkills[item.skill.field[0].name] = expertiseArr
        })

        return Object.entries(formattedSkills)
      },
    }
  )

  return (
    <div css={STYLES.cardCtn}>
      <h2 css={[STYLES.sectionTitle, css({ fontSize: 20 })]}>SKILLS</h2>

      {isLoading ? (
        <Spin />
      ) : (
        data?.map(([expertise, skills]) => (
          <div key={expertise}>
            <h3
              css={{
                fontSize: 16,
                marginBottom: 20,
                backgroundColor: COLORS.lightblue,
                padding: '10px 15px',
                borderRadius: SIZES.borderRadius,
              }}
            >
              {expertise}
            </h3>
            <div css={{ display: 'flex', gap: 25, flexWrap: 'wrap', marginBottom: 30 }}>
              {skills.map(({ name, level }) => (
                <div
                  key={name}
                  css={{
                    border: `1px solid ${COLORS.lightGrey}`,
                    padding: '10px 15px',
                    borderRadius: SIZES.borderRadius,
                  }}
                >
                  <p css={{ fontSize: 14, marginBottom: 8 }}>{name}</p>
                  {renderSkillDots(level)}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default SkillInfoSection
