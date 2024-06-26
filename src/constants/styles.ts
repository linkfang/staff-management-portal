import { css } from '@emotion/react'

export const COLORS = {
  primary: '#0072BA',
  primaryHighlight: '#edf5fa',
  lightblue: '#F7FBFC',
  lightGrey: '#F0F4F6',
  textGrey: 'hsl(200, 7%, 46%)',
  grey: '#D9D9D9',
  green: '#149200',
  orange: '#c28b0a',
  errorRed: '#cd201f',
  textBlack: '#151515',
  bgColor: '#F7FBFC',
} as const

export const SIZES = {
  navMenuExpand: 200,
  bodyPaddingHorizontal: 45,
  tableHeightL: 'calc(100vh - 280px)',
  borderRadius: 10,
  pageWidth: `calc(100vw - 90px - 200px - 30px)`,
} as const

export const STYLES = {
  cardCtn: css({
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
    padding: '30px 40px',
    borderRadius: SIZES.borderRadius,
  }),
  sectionTitle: css({ color: COLORS.textGrey, marginBottom: 25 }),
  skillDot: css({ height: 10, width: 10, borderRadius: 10, backgroundColor: COLORS.green }),
  skillCard: css({
    border: `2px solid ${COLORS.lightGrey}`,
    padding: '15px 20px',
    borderRadius: SIZES.borderRadius,
  }),
  buttonWithoutStyle: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 },
} as const
