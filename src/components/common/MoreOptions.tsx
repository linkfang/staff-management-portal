import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, type MenuProps, Modal } from 'antd'
import EditExpertise from '../expertise/EditExpertise'
import { useState } from 'react'
import { trpc } from '@/utils/trpc'

const MoreOptions = () => {
  const [shouldOpen, setShouldOpen] = useState(false)

  const { data: expertiseData } = trpc.findManyExpertise.useQuery(undefined, {
    select: (data) => data.map(({ id, name }) => ({ id, name })),
  })

  const moreItems: MenuProps['items'] = [
    {
      label: ' Edit Expertise',
      key: '0',
      onClick: () => {
        setShouldOpen(true)
      },
    },
    {
      label: ' Edit Skills',
      key: '2',
      onClick: () => {},
    },
  ]

  return (
    <>
      <Dropdown trigger={['click']} menu={{ items: moreItems }}>
        <MoreOutlined />
      </Dropdown>

      <Modal centered footer={null} open={shouldOpen} onCancel={() => setShouldOpen(false)} css={{ minWidth: 600 }}>
        <EditExpertise data={expertiseData} closeModal={() => setShouldOpen(false)} />
      </Modal>
    </>
  )
}

export default MoreOptions
