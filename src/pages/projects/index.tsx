import ActionButton from '@/components/common/ActionButton'
import PageLayout from '@/components/layout/PageLayout'
import { TABLE_PROPS } from '@/constants/componentProps'
import { PROJECT_STATUSES, statusToColorObj } from '@/constants/general'
import { renderProjectStatus } from '@/utils/general'
import { renderMonoDateLabel } from '@/utils/renderElement'
import { trpc } from '@/utils/trpc'
import { App, Button, type InputRef, Popconfirm, Space, Table, Tag, type TableColumnType, Input } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { AppstoreAddOutlined, SearchOutlined } from '@ant-design/icons'
import type { RouterOutput, TProjectData, TExpertise } from '@/type/general'
import ProjectDetailModal from '@/components/project/ProjectDetailModal'
import { useRef, useState } from 'react'
import MoreOptions from '@/components/common/MoreOptions'
import Highlighter from 'react-highlight-words'
import type { FilterDropdownProps } from 'antd/es/table/interface'

type TProjectResDeleted = RouterOutput['deleteAProject']
type TColumnName = 'name' | 'customer' | 'persons'

const renderActionColumn = (
  onEdit: (project: TProjectData) => void,
  onDelete: (project: TProjectData) => Promise<TProjectResDeleted>,
  isDeletingProject: boolean
) => ({
  title: 'Action',
  width: 180,
  render: (project: TProjectData) => (
    <div css={{ display: 'flex', gap: 10 }}>
      <Button onClick={() => onEdit(project)}>Edit</Button>
      <Popconfirm
        placement="left"
        title={`Delete Project - ${project.name}?`}
        onConfirm={() => onDelete(project)}
        cancelButtonProps={{ disabled: isDeletingProject }}
      >
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  ),
})

const ProjectsPage = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<TProjectData>()
  const { notification } = App.useApp()

  const [searchText, setSearchText] = useState({ name: '', customer: '', persons: '' })
  const searchInput = useRef<InputRef>(null)

  const columns: ({ fieldsData }: { fieldsData: TExpertise[] | undefined }) => ColumnsType<TProjectData> = ({
    fieldsData,
  }) => [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 200,
      fixed: 'left',
      ellipsis: true,
      ...getColumnSearchProps('name'),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined css={{ color: filtered ? '#1677ff' : undefined, paddingRight: 8 }} />
      ),
    },
    { title: 'Customer', dataIndex: 'customer', width: 220, ellipsis: true, ...getColumnSearchProps('customer') },
    {
      title: 'Status',
      width: 120,
      filters: Object.keys(PROJECT_STATUSES).map((item) => ({ text: item, value: item })),
      onFilter: (value, project) => renderProjectStatus(project) === value,
      sorter: (a, b) => a.startDate.localeCompare(b.startDate),
      render: (project: TProjectData) => {
        const status = renderProjectStatus(project)
        return (
          <Tag css={{ width: '100%', textAlign: 'center' }} color={statusToColorObj[status]}>
            {status}
          </Tag>
        )
      },
    },
    {
      title: 'Start Date',
      width: 120,
      sorter: (a, b) => a.startDate.localeCompare(b.startDate),
      render: ({ startDate }: TProjectData) => renderMonoDateLabel(startDate),
    },
    {
      title: 'End Date',
      width: 120,
      sorter: (a, b) => a.endDate.localeCompare(b.endDate),
      render: ({ endDate }: TProjectData) => renderMonoDateLabel(endDate),
    },
    { title: 'Description', dataIndex: 'description', width: 200, ellipsis: true },
    {
      title: 'Skills',
      width: 200,
      ellipsis: true,
      render: ({ skills }: TProjectData) => <>{skills.map((skill) => skill.name).join(', ')}</>,
    },
    {
      title: 'Fields',
      width: 180,
      ellipsis: true,
      filters: fieldsData?.map((item) => ({ text: item.name, value: item.name })),
      onFilter: (value, project) => project.fields.some((item) => item.name === value),
      render: ({ fields }: TProjectData) => <>{fields.map((field) => field.name).join(', ')}</>,
    },
    {
      title: 'Team Members',
      width: 180,
      ellipsis: true,
      render: ({ persons }: TProjectData) =>
        persons.map((person) => person.preferredName || person.firstName).join(', '),

      onFilter: (value, record) =>
        record['persons']
          .map((item) => item.preferredName.toLowerCase() || item.firstName.toLowerCase())
          .some((item) => item.includes((value as string).toLowerCase())),
    },
  ]

  const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps['confirm'], columnName: TColumnName) => {
    confirm({ closeDropdown: false })
    setSearchText((pre) => ({ ...pre, [columnName]: selectedKeys[0] }))
  }

  const handleReset = (clearFilters: () => void, confirm: FilterDropdownProps['confirm']) => {
    clearFilters()
    confirm({ closeDropdown: false })
    setSearchText({ name: '', customer: '', persons: '' })
  }

  const getColumnSearchProps = (columnName: TColumnName): TableColumnType<TProjectData> => ({
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

          <Button type="link" size="small" onClick={close}>
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined css={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilter: (value, record) => {
      return record[columnName]
        .toString()
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

  const { data, isFetching: isFetchingProjects, refetch: refetchProjects } = trpc.findManyProject.useQuery()
  const { data: fieldsData, isFetching: isFetchingExpertise } = trpc.findManyExpertise.useQuery()
  const { mutate: createProject, isLoading: isCreating } = trpc.createAProject.useMutation({
    onSuccess: (_, project) => {
      notification.success({ message: `Added ${project.name}` })
      onMutationSuccess()
    },
  })

  const { mutate: updateProject, isLoading: isUpdating } = trpc.updateAProject.useMutation({
    onSuccess: (_, project) => {
      notification.success({ message: `Updated ${project.name}` })
      onMutationSuccess()
    },
  })

  const { mutateAsync: deleteProject, isLoading: isDeletingProject } = trpc.deleteAProject.useMutation({
    onSuccess: (project) => {
      notification.success({ message: `Deleted ${project.name}` })
      onMutationSuccess()
    },
  })

  const onMutationSuccess = () => {
    setShouldOpen(false)
    refetchProjects()
  }

  const onEditClick = (project: TProjectData) => {
    setSelectedProject(project)
    setShouldOpen(true)
  }

  const onDeleteClick = async (project: TProjectData) => deleteProject(project.id)

  return (
    <PageLayout
      title="Projects"
      actions={
        <>
          <ActionButton
            icon={<AppstoreAddOutlined />}
            action={() => {
              setSelectedProject(undefined)
              setShouldOpen(true)
            }}
          />
          <ActionButton icon={<MoreOptions />} />
        </>
      }
    >
      <Table
        {...TABLE_PROPS({ showTotalLabel: 'projects' })}
        columns={[...columns({ fieldsData }), renderActionColumn(onEditClick, onDeleteClick, isDeletingProject)]}
        dataSource={data ?? []}
        loading={isFetchingProjects || isFetchingExpertise}
        rowKey="id"
      />

      {selectedProject ? (
        <ProjectDetailModal
          isEdit={true}
          callbackFunc={updateProject}
          selectedProject={selectedProject}
          isLoading={isUpdating}
          {...{ shouldOpen, setShouldOpen }}
        />
      ) : (
        <ProjectDetailModal
          isEdit={false}
          callbackFunc={createProject}
          selectedProject={selectedProject}
          isLoading={isCreating}
          {...{ shouldOpen, setShouldOpen }}
        />
      )}
    </PageLayout>
  )
}
export default ProjectsPage
