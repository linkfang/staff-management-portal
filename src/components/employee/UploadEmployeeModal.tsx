import { Modal, Upload, type UploadProps } from 'antd'
import { FileAddOutlined } from '@ant-design/icons'
import { COLORS } from '@/constants/styles'

// eslint-disable-next-line no-unused-vars
type TUploadEmployeeModalProps = { openUpload: boolean; setOpenUpload: (open: boolean) => void }

const uploadProps: UploadProps = {
  name: 'file',
  accept: '.csv',
  onChange: (info) => {
    console.log(info)
  },
  onDrop: (e) => {
    console.log(e)
  },
}

const UploadEmployeeModal = ({ openUpload, setOpenUpload }: TUploadEmployeeModalProps) => {
  return (
    <Modal centered title="Upload employees" open={openUpload} onCancel={() => setOpenUpload(false)}>
      <Upload.Dragger {...uploadProps}>
        <FileAddOutlined css={{ fontSize: 30, color: COLORS.primary, margin: '10px 0 15px' }} />
        <p className="ant-upload-hint" css={{ marginBottom: 5 }}>
          Click or drag file to this area to upload
        </p>
      </Upload.Dragger>
    </Modal>
  )
}

export default UploadEmployeeModal
