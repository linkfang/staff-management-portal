import { MoreOutlined } from '@ant-design/icons'
import { App, Dropdown, ModalFuncProps, type MenuProps } from 'antd'
import EditExpertise from '../expertise/EditExpertise'

const commonModalProps: ModalFuncProps = { okText: 'Save', cancelText: 'Cancel', icon: <></>, centered: true }

const MoreOptions = () => {
  const { modal } = App.useApp()

  const moreItems: MenuProps['items'] = [
    {
      label: ' Edit Expertise',
      key: '0',
      onClick: () => {
        modal.confirm({
          ...commonModalProps,
          title: 'Edit Expertise',
          content: <EditExpertise />,
        })
      },
    },
    {
      label: ' Edit Skills',
      key: '2',
      onClick: () => {
        modal.confirm({
          ...commonModalProps,
          title: 'Edit Skills',
          content: <></>,
        })
      },
    },
  ]

  return (
    <Dropdown trigger={['click']} menu={{ items: moreItems }}>
      <MoreOutlined />
    </Dropdown>
  )
}

export default MoreOptions
