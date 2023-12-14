import { DATE_FORMAT_STRINGS } from '@/constants/general'
import dayjs from 'dayjs'

export const renderMonoDateLabel = (date: string) => (
  <span css={{ fontFamily: 'monospace' }}>{dayjs(date).format(DATE_FORMAT_STRINGS.yearMonthDay)}</span>
)
