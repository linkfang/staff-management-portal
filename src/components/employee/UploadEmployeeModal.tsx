import { App, Modal, Spin, Table, Upload, type UploadProps } from 'antd'
import { FileAddOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { COLORS } from '@/constants/styles'
import { parse } from 'papaparse'
import { trpc } from '@/utils/trpc'
import { isValidEmail } from '@/utils/general'
import { useState } from 'react'
import { ColumnsType } from 'antd/es/table'

// eslint-disable-next-line no-unused-vars
type TUploadEmployeeModalProps = { openUpload: boolean; setOpenUpload: (open: boolean) => void }
type TUploadPersonData = {
  firstName: string
  lastName: string
  preferredName: string
  email: string
  title: string
  errorType?: string
}
const requiredColumns = ['firstName', 'lastName', 'email', 'title'] as const

const columns: ColumnsType<TUploadPersonData> = [
  {
    title: 'Full Name',
    width: 240,
    render: (person) => `${person.firstName} ${person.lastName}`,
  },
  {
    title: 'Preferred Name',
    width: 180,
    dataIndex: 'preferredName',
  },
  {
    title: 'Email',
    width: 240,
    dataIndex: 'email',
  },
  {
    title: 'Title',
    width: 240,
    dataIndex: 'title',
  },
]

const UploadEmployeeModal = ({ openUpload, setOpenUpload }: TUploadEmployeeModalProps) => {
  const { notification } = App.useApp()
  const { data: existingData, isFetching } = trpc.findManyPerson.useQuery()
  const [invalidItems, setInvalidItem] = useState<TUploadPersonData[]>()
  const [uploadingItems, setUploadingItems] = useState<TUploadPersonData[]>()
  const [isOKToUpload, setIsOkToUpload] = useState(false)

  const uploadProps: UploadProps = {
    name: 'file',
    maxCount: 1,
    accept: '.csv',
    onChange: (info) => {
      if (!existingData) return

      const { status, error, originFileObj } = info.file

      console.log(error)

      if (status === 'done' && originFileObj)
        parse(originFileObj, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data: uploadData }: { data: TUploadPersonData[] }) => {
            console.log(uploadData)

            // check if all required column/headers are included
            const missingColumns = requiredColumns.filter((field) => !uploadData[0].hasOwnProperty(field))
            const missingColumnsLength = missingColumns.length
            const moreThanOneMissing = missingColumnsLength > 1

            if (missingColumnsLength > 0) {
              notification.error({
                message: `${missingColumns.join(', ')} column${moreThanOneMissing ? 's are' : ' is'} missing`,
              })
              return
            }

            const invalidItems: TUploadPersonData[] = []
            uploadData.forEach((item, index) => {
              if (!isValidEmail(item.email)) {
                invalidItems.push({ ...item, errorType: 'Invalid Email' })
                return
              }

              const isFieldEmpty = requiredColumns.some((field) => !item[field].replaceAll(' ', ''))
              if (isFieldEmpty) {
                invalidItems.push({ ...item, errorType: 'Empty Field' })
                return
              }

              const isExist = existingData.find((current) => current.email === item.email.replaceAll(' ', ''))
              if (isExist) {
                invalidItems.push({ ...item, errorType: 'Email Already Exists' })
                return
              }

              const isDuplicated = uploadData.findIndex((ele) => ele.email === item.email) !== index
              if (isDuplicated) invalidItems.push({ ...item, errorType: 'Duplicated Email' })
            })

            console.log(invalidItems)
            if (invalidItems.length > 0) {
              setUploadingItems(undefined)
              setInvalidItem(invalidItems)
              return
            }

            setInvalidItem(undefined)
            setUploadingItems(uploadData)
            setIsOkToUpload(true)
          },
        })
    },
    onDrop: (info) => {
      if (info.dataTransfer.files[0].type !== 'text/csv') notification.error({ message: 'Only supports .csv files' })
    },
  }

  return (
    <Modal
      width={800}
      centered
      title="Upload to Add Employees"
      open={openUpload}
      onCancel={() => setOpenUpload(false)}
      okButtonProps={{ disabled: !isOKToUpload }}
    >
      {isFetching ? (
        <Spin css={{ width: '100%', height: 116 }} />
      ) : (
        <Upload.Dragger {...uploadProps}>
          <FileAddOutlined css={{ fontSize: 30, color: COLORS.primary, margin: '10px 0 15px' }} />
          <p className="ant-upload-hint" css={{ marginBottom: 5 }}>
            Click or drag file to this area to upload
          </p>
        </Upload.Dragger>
      )}

      <div css={{ marginTop: 20 }}>
        {invalidItems && (
          <>
            <div css={{ display: 'flex', gap: 5 }}>
              <ExclamationCircleOutlined css={{ color: COLORS.errorRed }} />
              <p css={{ color: COLORS.errorRed }}>
                Please fix the error item{invalidItems.length > 1 ? 's' : ''} below to be able to upload.
              </p>
            </div>
            <Table
              dataSource={invalidItems}
              columns={[
                {
                  title: 'Error Type',
                  width: 240,
                  dataIndex: 'errorType',
                },
                ...columns,
              ]}
              css={{ width: 1000 }}
              scroll={{ x: 800 }}
            />
          </>
        )}

        {uploadingItems && (
          <Table dataSource={uploadingItems} columns={columns} css={{ width: 1000 }} scroll={{ x: 800 }} />
        )}
      </div>
    </Modal>
  )
}

export default UploadEmployeeModal
