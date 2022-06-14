import React from 'react'
import { Button } from 'antd'
import { useSearchParams } from 'react-router-dom'

const Component = () => {
  const [, setSearchParams] = useSearchParams()
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
