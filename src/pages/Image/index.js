import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload, message } from 'antd'
import React, { useState } from 'react'
import { connect } from 'react-redux'

const Component = (props) => {
  const { dispatch, fileList } = props
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const handleCancel = () => setPreviewVisible(false)

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.response?.url)
    setPreviewVisible(true)
    setPreviewTitle(file.name)
  }

  const handleChange = files => {
    const { file, fileList } = files
    dispatch({ type: 'global/setState', payload: { fileList } })
    if (file.status === 'done') {
      message.success('图片上传成功')
      const newFileList = files.fileList.map(item => {
        return {
          uid: item.uid,
          name: item.name,
          url: item.url || item.response?.url,
          status: item.status
        }
      })
      dispatch({ type: 'global/setState', payload: { fileList: newFileList } })
    }
  }

  const uploadButton = (<div>
    <PlusOutlined />
    <div
      style={{
        marginTop: 8
      }}
    >
      上传图片
    </div>
  </div>)
  return (<>
    <Upload
      action="/api/koa/file/upload"
      listType="picture-card"
      fileList={fileList}
      onChange={handleChange}
      onPreview={handlePreview}
    >
      {fileList.length >= 8 ? null : uploadButton}
    </Upload>
    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
      <img
        alt="example"
        style={{
          width: '100%'
        }}
        src={previewImage}
      />
    </Modal>
  </>)
}

const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
