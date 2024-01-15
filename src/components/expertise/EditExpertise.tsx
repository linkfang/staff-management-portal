import { trpc } from '@/utils/trpc'
import { App, Button, Form, Input, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { COLORS, STYLES } from '@/constants/styles'

type TEditingData = { id: number; name: string }

const EditExpertise = () => {
  const [editingData, setEditingData] = useState<TEditingData[]>()

  const { notification } = App.useApp()
  const [form] = Form.useForm()
  const { data } = trpc.findManyExpertise.useQuery()

  useEffect(() => {
    if (data) setEditingData(data)
  }, [data])

  if (!editingData || !data) return <Spin />

  return (
    <div>
      <div css={{ display: 'flex', gap: 20 }}>
        <Form
          form={form}
          onFinish={() => {
            const inputValue = form.getFieldValue('expertise')

            if (!inputValue) return

            if ([...data, ...editingData].find((item) => item.name.toLowerCase() === inputValue.toLowerCase())) {
              notification.error({ message: `${inputValue} already exists` })
              return
            }

            setEditingData((pre) => {
              if (!pre) return [{ id: -1, name: inputValue }]
              return [...pre, { id: -1, name: inputValue }]
            })

            form.setFieldValue('expertise', '')
          }}
        >
          <Form.Item name="expertise" rules={[{ required: true }]}>
            <Input aria-label="expertise" placeholder="Expertise" />
          </Form.Item>
        </Form>
        <Button onClick={() => form.submit()}>Add</Button>
      </div>

      <div css={{ marginTop: 10, marginBottom: 20, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {data?.map((item) => {
          const isDeleted = !editingData.find((ele) => ele.id === item.id)

          return (
            <div
              key={item.id}
              css={[
                {
                  transition: 'all 0.3s ease-out',
                  position: 'relative',
                  display: 'flex',
                  backgroundColor: isDeleted ? 'hsl(0, 85%, 94%)' : COLORS.lightGrey,
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: 6,
                },
              ]}
            >
              <p>{item.name}</p>
              <div
                css={{
                  transition: 'all 0.3s ease-out',
                  position: 'absolute',
                  left: 14,
                  right: isDeleted ? 37 : '100%',
                  height: 1,
                  backgroundColor: '#4f5456',
                }}
              ></div>
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
              <div
                key={item.id}
                css={[
                  {
                    transition: 'all 0.3s ease-out',
                    position: 'relative',
                    display: 'flex',
                    backgroundColor: 'hsl(112, 50%, 90%)',
                    alignItems: 'center',
                    padding: '8px 16px',
                    borderRadius: 6,
                  },
                ]}
              >
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
    </div>
  )
}

export default EditExpertise
