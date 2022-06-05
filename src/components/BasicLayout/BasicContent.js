import React from 'react'
import { Breadcrumb, Button, Layout } from 'antd'

const { Header, Content, Sider } = Layout

const Component = () => {
  return (
    <Layout style={{
      padding: '0 24px 24px'
    }}>
      <Breadcrumb
        style={{
          margin: '16px 0'
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content>
        <Button type="primary">点击</Button>
      </Content>
    </Layout>
  )
}

export default Component
