import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, type MenuProps, Modal, App } from 'antd'
import EditExpertise from '../expertise/EditExpertise'
import { useState } from 'react'
import { trpc } from '@/utils/trpc'
import type { TEditingData } from '@/type/general'
import { MODAL_PROPS } from '@/constants/componentProps'

const findToBeDeleted = (preData: (Record<string, string | number> & { id: number })[], newData: TEditingData[]) => {
  const toBeDeleted = []
  for (let i = 0; i < preData.length; i++) {
    const element = preData[i]
    if (!newData.find((item) => item.id === element.id)) toBeDeleted.push(element.id)
  }

  return toBeDeleted
}

const MoreOptions = () => {
  const { notification } = App.useApp()

  const [shouldOpen, setShouldOpen] = useState(false)
  const [type, setType] = useState<'Expertise' | 'Skills'>('Expertise')
  const isEditingExpertise = type === 'Expertise'

  const {
    data: expertiseData,
    refetch: refetchExpertise,
    isFetching: isFetchingExpertise,
  } = trpc.findManyExpertise.useQuery(undefined, {
    select: (data) => data.map(({ id, name }) => ({ id, name })),
  })

  const {
    data: skillsData,
    refetch: refetchSkills,
    isFetching: isFetchingSkills,
  } = trpc.findManySkill.useQuery(undefined, {
    select: (data) => data.map(({ name, id }) => ({ id, name })),
  })

  const { mutate: mutateExpertise, isLoading: isMutatingExpertise } = trpc.editManyExpertise.useMutation({
    onSuccess: () => {
      refetchExpertise()
      notification.success({ message: 'Updated expertise' })
    },
  })

  const { mutate: mutateSkills, isLoading: isMutatingSkills } = trpc.editManySkills.useMutation({
    onSuccess: () => {
      refetchSkills()
      notification.success({ message: 'Updated skills' })
    },
  })

  const editExpertiseCallback = (editingData: TEditingData[]) => {
    if (!expertiseData) return

    const toBeDeleted = findToBeDeleted(expertiseData, editingData)
    const toBeAdded = editingData.filter((item) => item.id < 0).map(({ name }) => ({ name }))

    mutateExpertise({ toBeDeleted, toBeAdded })
  }

  const editSkillCallback = (editingData: TEditingData[]) => {
    if (!skillsData) return

    const toBeDeleted = findToBeDeleted(skillsData, editingData)
    const toBeAdded = editingData.filter((item) => item.id < 0).map(({ name }) => ({ name, description: '' }))

    mutateSkills({ toBeDeleted, toBeAdded })
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
        {...MODAL_PROPS(isEditingExpertise ? isMutatingExpertise : isMutatingSkills)}
        title={`Edit ${type}`}
        footer={null}
        open={shouldOpen}
        onCancel={() => setShouldOpen(false)}
        css={{ minWidth: 600 }}
      >
        <EditExpertise
          data={isEditingExpertise ? expertiseData : skillsData}
          closeModal={() => setShouldOpen(false)}
          callbackFunc={isEditingExpertise ? editExpertiseCallback : editSkillCallback}
          isMutating={isEditingExpertise ? isMutatingExpertise : isMutatingSkills}
          isFetching={isEditingExpertise ? isFetchingExpertise : isFetchingSkills}
        />
      </Modal>
    </>
  )
}

export default MoreOptions
