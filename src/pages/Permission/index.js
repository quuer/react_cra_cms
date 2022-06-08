import React from 'react'
import styles from './index.less'
import { useNavigate, useParams } from 'react-router'
import { Button } from 'antd'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const Component = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onRouterPush = () => {
    navigate('/echart?name=test&age=333')
  }
  return (<div>
    <Button onClick={onRouterPush}>跳转</Button>
  </div>)
}

export default Component
