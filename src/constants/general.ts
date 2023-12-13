export const DATA_FORMAT_STRINGS = {
  yearMonthDay: 'YYYY-MM-DD',
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
