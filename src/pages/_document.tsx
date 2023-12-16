import { COLORS } from '@/constants/styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body css={{ backgroundColor: COLORS.bgColor }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
