import { App, Button, Form, Input, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { COLORS, STYLES } from '@/constants/styles'
import { TEditingData } from '@/type/general'

type TEditExpertiseProps = {
  data: TEditingData[] | undefined
  closeModal: () => void
  // eslint-disable-next-line no-unused-vars
  callbackFunc: (data: TEditingData[]) => void
}
const chipStyle = {
  transition: 'all 0.3s ease-out',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  borderRadius: 6,
} as const

const overlapLineStyle = {
  transition: 'all 0.3s ease-out',
  position: 'absolute',
  left: 14,
  height: 1,
  backgroundColor: '#4f5456',
} as const

const EditExpertise = ({ closeModal, callbackFunc, data }: TEditExpertiseProps) => {
  const [editingData, setEditingData] = useState<TEditingData[]>()

  const { notification } = App.useApp()
  const [form] = Form.useForm()
  const { setFieldValue } = form

  useEffect(() => {
    if (data) setEditingData(data)
  }, [data])

  if (!editingData || !data) return <Spin />

  return (
    <>
      <div css={{ display: 'flex', gap: 20, marginTop: 15 }}>
        <Form
          form={form}
          onFinish={() => {
            const inputValue = form.getFieldValue('expertise')

            if (!inputValue) {
              notification.error({ message: 'Can not add an empty expertise' })
              return
            }

            if ([...data, ...editingData].find((item) => item.name.toLowerCase() === inputValue.toLowerCase())) {
              notification.error({ message: `${inputValue} already exists` })
              return
            }

            setEditingData((pre) => {
              if (!pre) return [{ id: -1, name: inputValue }]
              return [...pre, { id: -1, name: inputValue }]
            })

            setFieldValue('expertise', '')
          }}
        >
          <Form.Item name="expertise" initialValue="">
            <Input aria-label="expertise" placeholder="Expertise" />
          </Form.Item>
        </Form>
        <Button onClick={() => form.submit()}>Add</Button>
      </div>

      <div css={{ marginBottom: 20, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {data?.map((item) => {
          const isDeleted = !editingData.find((ele) => ele.id === item.id)

          return (
            <div
              key={item.name}
              css={[chipStyle, { backgroundColor: isDeleted ? 'hsl(0, 85%, 94%)' : COLORS.lightGrey }]}
            >
              <p>{item.name}</p>
              <div css={[overlapLineStyle, { right: isDeleted ? 37 : '100%' }]}></div>
              <button
                css={[
                  STYLES.buttonWithoutStyle,
                  {
                    marginLeft: 10,
                    transition: 'all 0.3s ease-in',
                    ':hover': { color: isDeleted ? COLORS.green : COLORS.errorRed },
                  },
                ]}
                onClick={() => {
                  if (isDeleted) {
                    setEditingData((pre) => {
                      if (!pre) return pre
                      return [...pre, { name: item.name, id: item.id }]
                    })
                    return
                  }
                  setEditingData((pre) => {
                    if (!pre) return pre
                    return pre.filter((ele) => ele.id !== item.id)
                  })
                }}
              >
                <CloseOutlined css={{ transition: 'all 0.3s ease-out', rotate: isDeleted ? '135deg' : '0' }} />
              </button>
            </div>
          )
        })}

        {editingData
          .filter((item) => !data?.find((ele) => ele.id === item.id))
          .map((item) => {
            return (
              <div key={item.name} css={[chipStyle, { backgroundColor: 'hsl(112, 50%, 90%)' }]}>
                <p>{item.name}</p>

                <button
                  css={[
                    STYLES.buttonWithoutStyle,
                    {
                      marginLeft: 10,
                      transition: 'all 0.3s ease-in',
                      ':hover': { color: COLORS.errorRed },
                    },
                  ]}
                  onClick={() => {
                    setEditingData((pre) => {
                      if (!pre) return pre
                      return pre.filter((ele) => ele.name !== item.name)
                    })
                  }}
                >
                  <CloseOutlined css={{ transition: 'all 0.3s ease-out' }} />
                </button>
              </div>
            )
          })}
      </div>

      <div css={{ display: 'flex', justifyContent: 'flex-end', gap: 20 }}>
        <Button onClick={() => closeModal()}>Cancel</Button>

        <Button type="primary" onClick={() => callbackFunc(editingData)}>
          Save
        </Button>
      </div>
    </>
  )
}

export default EditExpertise
