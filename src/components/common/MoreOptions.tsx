import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, type MenuProps, Modal, App } from 'antd'
import EditExpertise from '../expertise/EditExpertise'
import { useState } from 'react'
import { trpc } from '@/utils/trpc'
import { TEditingData } from '@/type/general'

const MoreOptions = () => {
  const { notification } = App.useApp()

  const [shouldOpen, setShouldOpen] = useState(false)
  const [type, setType] = useState<'Expertise' | 'Skills'>('Expertise')

  const { data: expertiseData, refetch: refetchExpertise } = trpc.findManyExpertise.useQuery(undefined, {
    select: (data) => data.map(({ id, name }) => ({ id, name })),
  })

  const { data: skillsData, refetch: refetchSkills } = trpc.findManySkill.useQuery(undefined, {
    select: (data) => data.map(({ name, id }) => ({ id, name })),
  })

  const { mutate: mutateExpertise } = trpc.editManyExpertise.useMutation({
    onSuccess: () => {
      refetchExpertise()
      notification.success({ message: 'Updated expertise' })
    },
  })

  const EditExpertiseCallback = (editingData: TEditingData[]) => {
    if (!expertiseData) return

    const toBeDeleted = []
    for (let i = 0; i < expertiseData.length; i++) {
      const element = expertiseData[i]
      if (!editingData.find((item) => item.id === element.id)) toBeDeleted.push(element.id)
    }

    const toBeAdded = editingData.filter((item) => item.id < 0).map(({ name }) => ({ name }))

    mutateExpertise({ toBeDeleted, toBeAdded })
  }

  const moreItems: MenuProps['items'] = [
    {
      label: ' Edit Expertise',
      key: '0',
      onClick: () => {
        setType('Expertise')
        setShouldOpen(true)
      },
    },
    {
      label: ' Edit Skills',
      key: '2',
      onClick: () => {
        setType('Skills')
        setShouldOpen(true)
      },
    },
  ]

  return (
    <>
      <Dropdown trigger={['click']} menu={{ items: moreItems }}>
        <MoreOutlined />
      </Dropdown>

      <Modal
        destroyOnClose
        centered
        title={`Edit ${type}`}
        footer={null}
        open={shouldOpen}
        onCancel={() => setShouldOpen(false)}
        css={{ minWidth: 600 }}
      >
        <EditExpertise
          data={type === 'Expertise' ? expertiseData : skillsData}
          closeModal={() => setShouldOpen(false)}
          callbackFunc={type === 'Expertise' ? EditExpertiseCallback : () => {}}
        />
      </Modal>
    </>
  )
}

export default MoreOptions
