import { AppRouter } from '@/server/routers/_app'
import { Interpolation, Theme } from '@emotion/react'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export type TEmotionCSS = Interpolation<Theme>
export type RouterOutput = inferRouterOutputs<AppRouter>
export type TPersonData = RouterOutput['findManyPerson'][0]
export type RouterInput = inferRouterInputs<AppRouter>

export type TProjectData = RouterOutput['findManyProject'][0]
export type TEditingData = { id: number; name: string }
