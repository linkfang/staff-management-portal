import { initTRPC } from '@trpc/server'
import { Context } from './context'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const t = initTRPC.context<Context>().create()

export const router = t.router

export const procedure = t.procedure

export const middleware = t.middleware

export const mergeRouters = t.mergeRouters
