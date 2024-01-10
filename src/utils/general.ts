import { PROJECT_STATUSES } from '@/constants/general'
import dayjs from 'dayjs'

export const renderProjectStatus = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
  if (dayjs().isBefore(startDate)) return PROJECT_STATUSES.Upcoming
  if (dayjs().isSameOrAfter(startDate) && dayjs().isSameOrBefore(endDate)) return PROJECT_STATUSES['On Going']
  return PROJECT_STATUSES.Completed
}

export const isOnGoing = (startDate: string, endDate: string) =>
  dayjs().isSameOrAfter(dayjs(startDate)) && dayjs().isSameOrBefore(dayjs(endDate))

export const isCompleted = (endDate: string) => dayjs().isAfter(endDate)

type TDisplayNameArgs = {
  firstName: string
  lastName: string
  preferredName: string
  onlyFirstName?: boolean
}
export const displayName = ({ firstName, preferredName, lastName, onlyFirstName }: TDisplayNameArgs) =>
  `${preferredName || firstName} ${onlyFirstName ? '' : lastName}`
