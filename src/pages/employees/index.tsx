import EmployeeDetailModal from '@/components/employee/EmployeeDetailModal'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { ALL_PATHS } from '@/constants/general'
import type { TExpertise, TPersonData } from '@/type/general'
import { displayName, isOnGoing } from '@/utils/general'
import { renderSkillDots } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'

import { App, Button, Popconfirm, Table, Input, Space } from 'antd'
import { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { UserAddOutlined, CloudUploadOutlined } from '@ant-design/icons'
import ActionButton from '@/components/common/ActionButton'
import MoreOptions from '@/components/common/MoreOptions'
import UploadEmployeeModal from '@/components/employee/UploadEmployeeModal'

import { SearchOutlined } from '@ant-design/icons'
import type { InputRef, TableColumnType } from 'antd'
import type { FilterDropdownProps } from 'antd/es/table/interface'
import Highlighter from 'react-highlight-words'

type TColumnName = 'fullName' | 'email'

/* Functions */
const renderSkillColumns = (skills: string[]): ColumnsType<TPersonData> =>
  skills.map((skillName) => ({
    title: skillName,
    width: 150,
    filters: [1, 2, 3, 4, 5].map((ele) => ({ text: ele, value: ele })),
    onFilter: (item, person) =>
      person.personSkills.find((personSkill) => personSkill.skill.name === skillName)?.level === item,
    sorter: (a, b) => {
      const skillLevelA = a.personSkills.find((personSkill) => personSkill?.skill?.name === skillName)?.level ?? 0
      const skillLevelB = b.personSkills.find((personSkill) => personSkill?.skill?.name === skillName)?.level ?? 0

      // Doing all 3 conditions to make the order change as little as possible
      if (skillLevelB > skillLevelA) return 1
      if (skillLevelB < skillLevelA) return -1
      return 0
    },
    render: ({ personSkills }: TPersonData) => {
      const skillLevel = personSkills.find((personSkill) => personSkill?.skill?.name === skillName)?.level ?? 0
      return renderSkillDots(skillLevel)
    },
  }))

const renderEditButtonColumn = (
  editCallback: (person: TPersonData) => void,
  deleteCallback: (id: number) => void,
  isDeletingPerson: boolean
) => ({
  title: 'Action',
  width: 160,
  render: (person: TPersonData) => (
    <div css={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
      <Button onClick={() => editCallback(person)}>Edit</Button>
      <Popconfirm
        title={`Delete employee - ${displayName(person)}?`}
        onConfirm={() => deleteCallback(person.id)}
        cancelButtonProps={{ disabled: isDeletingPerson }}
      >
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  ),
})

/* Component */
const EmployeesPage = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  const [openUpload, setOpenUpload] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<TPersonData>()
  const { notification } = App.useApp()

  const [searchText, setSearchText] = useState({ fullName: '', email: '' })
  const searchInput = useRef<InputRef>(null)

  const columns: ({ expertiseData }: { expertiseData: TExpertise[] | undefined }) => ColumnsType<TPersonData> = ({
    expertiseData,
  }) => [
    {
      title: 'Full Name',
      width: 190,
      fixed: 'left',
      ...getColumnSearchProps('fullName'),
      render: (item: TPersonData) => (
        <Link href={ALL_PATHS.employeeWithID(item?.id)}>
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText['fullName']]}
            autoEscape
            textToHighlight={item ? displayName(item) : ''}
          />
        </Link>
      ),
    },
    { title: 'Title', dataIndex: 'title', width: 200, sorter: (a, b) => a.title.localeCompare(b.title) },
    {
      title: 'Expertise',
      width: 220,
      filters: expertiseData?.map((item) => ({ text: item.name, value: item.name })),
      onFilter: (value, person) => person.expertise.some((item) => item.name === value),
      render: ({ expertise }: TPersonData) => <>{expertise.map((item) => item.name).join(', ')}</>,
    },
    {
      title: 'Projects',
      width: 100,
      sorter: (a, b) => {
        const onGoingB = b.projects.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length
        const onGoingA = a.projects.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length
        const totalB = b.projects.length
        const totalA = a.projects.length

        // Doing all 3 conditions to make the order change as little as possible
        if (onGoingB > onGoingA || totalB > totalA) return -1
        if (onGoingB < onGoingA || totalB < totalA) return 1
        return 0
      },
      render: ({ projects }: TPersonData) => (
        <>
          {projects.filter(({ startDate, endDate }) => isOnGoing(startDate, endDate)).length} of {projects.length}
        </>
      ),
    },
    { title: 'Email', dataIndex: 'email', width: 240, ...getColumnSearchProps('email') },
  ]

  const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps['confirm'], columnName: TColumnName) => {
    confirm({ closeDropdown: false })
    setSearchText((pre) => ({ ...pre, [columnName]: selectedKeys[0] }))
  }

  const handleReset = (clearFilters: () => void, confirm: FilterDropdownProps['confirm']) => {
    clearFilters()
    confirm({ closeDropdown: false })
    setSearchText({ fullName: '', email: '' })
  }

  const getColumnSearchProps = (columnName: TColumnName): TableColumnType<TPersonData> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div css={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${columnName}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, columnName)}
          css={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, columnName)}
            icon={<SearchOutlined />}
            size="small"
            css={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters, confirm)} size="small" css={{ width: 90 }}>
            Reset
          </Button>

          <Button type="link" size="small" onClick={() => close()}>
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined css={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilter: (value, record) => {
      if (columnName === 'email')
        return record[columnName]
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase())

      return `${record['firstName']}${record['preferredName']}${record['lastName']}`
        .toLowerCase()
        .includes((value as string).toLowerCase())
    },
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText[columnName]]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ),
  })

  const skills = trpc.findManySkill.useQuery()
  const persons = trpc.findManyPerson.useQuery()
  const { data: expertiseData, isFetching: isFetchingExpertise } = trpc.findManyExpertise.useQuery()

  const onMutationSuccess = (message: string) => {
    setShouldOpen(false)
    persons.refetch()
    notification.success({ message })
  }

  const { mutate: updatePerson, isLoading: isUpdating } = trpc.updateAPerson.useMutation({
    onSuccess: (_, person) => onMutationSuccess(`Updated ${displayName(person)}`),
  })

  const { mutate: createPerson, isLoading: isCreating } = trpc.createAPerson.useMutation({
    onSuccess: (_, person) => onMutationSuccess(`Add ${displayName(person)}`),
  })

  const { mutateAsync: deletePerson, isLoading: isDeletingPerson } = trpc.deleteAPerson.useMutation({
    onSuccess: (response) => onMutationSuccess(`Deleted ${displayName(response[1])}`),
  })

  const editBtnCallback = (personData: TPersonData) => {
    if (!personData) return

    setSelectedPerson(personData)
    setShouldOpen(true)
  }

  const deleteCallback = (id: number) => deletePerson(id)

  return (
    <PageLayout
      title="Employees"
      actions={
        <>
          <ActionButton
            icon={<UserAddOutlined />}
            action={() => {
              setSelectedPerson(undefined)
              setShouldOpen(true)
            }}
          />
          <ActionButton icon={<CloudUploadOutlined />} action={() => setOpenUpload(true)} />
          <ActionButton icon={<MoreOptions />} />
        </>
      }
    >
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'people' })}
        columns={[
          ...columns({ expertiseData }),
          renderEditButtonColumn(editBtnCallback, deleteCallback, isDeletingPerson),
          ...renderSkillColumns(skills?.data?.map((item) => item.name) ?? []),
        ]}
        dataSource={persons?.data}
        loading={skills.isFetching || persons.isFetching || isFetchingExpertise}
        rowKey="email"
      />

      {selectedPerson ? (
        <EmployeeDetailModal
          callbackFunc={updatePerson}
          isEdit={!!selectedPerson}
          {...{ shouldOpen, setShouldOpen, selectedPerson, isLoading: isUpdating }}
        />
      ) : (
        <EmployeeDetailModal
          callbackFunc={createPerson}
          isEdit={!!selectedPerson}
          {...{ shouldOpen, setShouldOpen, selectedPerson, isLoading: isCreating }}
        />
      )}
      <UploadEmployeeModal {...{ openUpload, setOpenUpload }} />
    </PageLayout>
  )
}

export default EmployeesPage
