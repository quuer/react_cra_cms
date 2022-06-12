import React from 'react'
import styles from './index.less'
import { useParams } from 'react-router'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Button } from 'antd'

const Component = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(props, '◀◀◀props')
  return (<div>
    <Button onClick={() => {
      setSearchParams({
        user: '郭芙蓉',
        skill: '排山倒海'
      })
    }}> 测试</Button>
  </div>)
}

export default Component
