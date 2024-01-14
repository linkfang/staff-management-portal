import { trpc } from '@/utils/trpc'
import { Button, Form, Input, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { COLORS, STYLES } from '@/constants/styles'

type TEditingData = { id: number; name: string }

const EditExpertise = () => {
  const [editingData, setEditingData] = useState<TEditingData[]>()

  const [form] = Form.useForm()
  const { data } = trpc.findManyExpertise.useQuery()

  useEffect(() => {
    if (data) setEditingData(data)
  }, [data])

  if (!editingData) return <Spin />

  return (
    <div>
      <div css={{ display: 'flex', gap: 20 }}>
        <Form form={form}>
          <Form.Item name="expertise">
            <Input aria-label="expertise" placeholder="Expertise" />
          </Form.Item>
        </Form>
        <Button
          onClick={() => {
            setEditingData((pre) => {
              if (!pre) return [{ id: -1, name: form.getFieldValue('expertise') }]
              return [...pre, { id: -1, name: 'Testing' }]
            })
          }}
        >
          Add
        </Button>
      </div>
      <div css={{ marginBottom: 10, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
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
      </div>
    </div>
  )
}

export default EditExpertise
