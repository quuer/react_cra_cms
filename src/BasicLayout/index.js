import React from 'react'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import BasicHeader from './BasicHeader'
import { Layout } from 'antd'

const Component = () => {
  return (
    <Layout>
      <BasicHeader></BasicHeader>
      <Layout style={{ height: 'calc(100vh - 64px' }}>
        <BasicSider></BasicSider>
        <BasicContent></BasicContent>
      </Layout>
    </Layout>
  )
}

export default Component
