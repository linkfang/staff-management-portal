import { type AppRouter } from '@/server/routers/_app'
import type { Interpolation, Theme } from '@emotion/react'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export type TEmotionCSS = Interpolation<Theme>
export type RouterOutput = inferRouterOutputs<AppRouter>
export type TPersonData = RouterOutput['findManyPerson'][0]
export type RouterInput = inferRouterInputs<AppRouter>

export type TProjectData = RouterOutput['findManyProject'][0]
export type TEditingData = { id: number; name: string }
export type TExpertise = RouterOutput['findManyExpertise'][0]
