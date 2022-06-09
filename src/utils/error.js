import { notification } from 'antd'
import React from 'react'

const ErrorNotice = (errTitle = '操作提示', errMsg, duration = 3) => {
  notification.open({
    message: <span style={{ color: '#3F3F3F' }}>{errTitle}</span>,
    description: <span style={{ color: 'rgba(247,51,51,0.69)' }}>{errMsg}</span>,
    duration
  })
}
export default ErrorNotice
