import { PROJECT_STATUSES } from '@/constants/general'
import dayjs from 'dayjs'

export const renderProjectStatus = ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
  if (dayjs().isBefore(startDate)) return PROJECT_STATUSES.Upcoming
  if (dayjs().isSameOrAfter(startDate) && dayjs().isSameOrBefore(endDate)) return PROJECT_STATUSES['On Going']
  return PROJECT_STATUSES.Completed
}
