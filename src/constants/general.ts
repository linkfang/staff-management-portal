import { SelectProps } from 'antd'

export const DATE_FORMAT_STRINGS = {
  yearMonthDay: 'YYYY-MM-DD',
  yearMonthDayHrMin: 'YYYY-MM-DD HH:mm',
} as const

export const PROJECT_STATUSES = {
  Upcoming: 'Upcoming',
  'On Going': 'On Going',
  Completed: 'Completed',
} as const

export const ALL_PATHS = {
  home: '/',
  employees: '/employees',
  employeeWithID: (id: string | number) => `/employees/${id}`,
  projects: '/projects',
  projectWithID: (id: string | number) => `/projects/${id}`,
}

export const statusToColorObj: Record<keyof typeof PROJECT_STATUSES, string> = {
  Upcoming: 'purple',
  'On Going': 'blue',
  Completed: 'green',
} as const

export const DEFAULT_SELECT_OPTIONS: SelectProps = { mode: 'multiple', allowClear: true, optionFilterProp: 'label' }
