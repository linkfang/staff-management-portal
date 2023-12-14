import { DATE_FORMAT_STRINGS } from '@/constants/general'
import { COLORS, STYLES } from '@/constants/styles'
import { css } from '@emotion/react'
import dayjs from 'dayjs'

export const renderMonoDateLabel = (date: string) => (
  <span css={{ fontFamily: 'monospace' }}>{dayjs(date).format(DATE_FORMAT_STRINGS.yearMonthDay)}</span>
)

export const renderSkillDots = (skillLevel: number) => {
  const originalDots = Array.from({ length: 5 }).fill(false)
  const skillDots = originalDots.fill(true, 0, skillLevel)

  return (
    <div css={{ display: 'flex', gap: 5 }}>
      {skillDots.map((item, index) =>
        item ? (
          <div key={index} css={STYLES.skillDot}></div>
        ) : (
          <div key={index} css={[STYLES.skillDot, css({ backgroundColor: COLORS.grey })]}></div>
        )
      )}
    </div>
  )
}
