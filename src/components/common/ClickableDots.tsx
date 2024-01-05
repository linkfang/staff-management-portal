import { COLORS, STYLES } from '@/constants/styles'
import { css } from '@emotion/react'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
type TClickableDots = { skillLevel: number; onClick: (level: number) => void }
export const ClickableDots = ({ skillLevel, onClick }: TClickableDots) => {
  const [nth, setNth] = useState(-1)

  const originalDots = Array.from({ length: 5 }).fill(false)
  const skillDots = originalDots.fill(true, 0, skillLevel)

  const clickableDotStyle = css({
    boxShadow: 'none',
    border: `2px solid ${COLORS.green}`,
    padding: 0,
    height: 12,
    width: 12,
    transition: 'all 0.25s ease-in',
    ':hover': { cursor: 'pointer', border: '2px solid green' },
  })

  return (
    <div css={{ display: 'flex', gap: 5 }} onMouseLeave={() => setNth(-1)}>
      {skillDots.map((item, index) => {
        const renderColor = (condition = true) => (condition && nth < index ? COLORS.grey : COLORS.green)

        return item ? (
          <button
            key={index}
            css={[
              STYLES.skillDot,
              clickableDotStyle,
              css({ backgroundColor: renderColor(nth >= 0), border: `2px solid ${renderColor(nth >= 0)}` }),
            ]}
            onMouseEnter={() => setNth(index)}
            onClick={() => onClick(nth + 1)}
          />
        ) : (
          <button
            key={index}
            onMouseEnter={() => setNth(index)}
            onClick={() => onClick(nth + 1)}
            css={[
              STYLES.skillDot,
              clickableDotStyle,
              css({ backgroundColor: COLORS.grey, border: `2px solid ${renderColor()}` }),
            ]}
          />
        )
      })}
    </div>
  )
}
