import React from 'react'
import styles from './index.less'
import { useNavigate, useParams } from 'react-router'
import { Button } from 'antd'
import { useLocation } from 'react-router'

const Component = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  console.log(location, params, '◀◀◀location')
  const onRouterPush = () => {
    navigate('/echart')
  }
  return (<div>
    <Button onClick={onRouterPush}>跳转</Button>
  </div>)
}

export default Component
