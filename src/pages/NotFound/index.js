import React, { useEffect } from 'react'
import NotFoundPng from '../../assets/image/404.png'
import styles from './index.less'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

const Component = () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = '未找到页面'
  }, [])
  return (
    <div
      className={styles.notfound}
      style={{ backgroundImage: `url(${NotFoundPng})` }}>
      <Button onClick={() => {
        navigate('/dashboard')
      }}>返回首页</Button>
    </div>
  )
}

export default Component
