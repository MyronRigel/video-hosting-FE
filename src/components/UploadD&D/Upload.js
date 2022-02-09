import React from 'react'
import { Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { constants } from '../../utils/constants'

const {Dragger} = Upload

const props = {
  name: 'video',
  multiple: true,
  action: `${constants.apiUrl}/video`,
  onChange(info) {
    const {status} = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

const UploadComponent = () => {
  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Only .mp4 format</p>
        <p className="ant-upload-hint">
          Drop your video here to upload
        </p>
      </Dragger>,
    </>
  )
}

export default UploadComponent