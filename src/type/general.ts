import { AppRouter } from '@/server/routers/_app'
import { Interpolation, Theme } from '@emotion/react'
import { inferRouterOutputs } from '@trpc/server'

export type TEmotionCSS = Interpolation<Theme>
export type RouterOutput = inferRouterOutputs<AppRouter>
export type TPersonData = RouterOutput['findManyPerson'][0]
