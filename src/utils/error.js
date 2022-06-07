import { notification } from 'antd'
import React from 'react'

export default (errMsg, actionMsg = '操作提示', duration = 3000) => {
  notification.open({
    description: <span style={{ color: '#EE4646' }}>{errMsg}</span>,
    message: <span style={{ color: '#3F3F3F' }}>{actionMsg}</span>,
    duration
  })
}

