import React from 'react'
import { Breadcrumb, Button, Layout } from 'antd'
import { Route, Routes } from 'react-router'
import { routes } from '../config/router'

const { Content } = Layout

const Component = () => {
  const genLayout = routes => {
    return (
      routes.map(route => {
        if (route.children?.length > 0) {
          return genLayout(route.children)
        }
        else {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              element={<route.component />}
              // element={connect((state) => state[NAME], dispatch => ({ dispatch }))(route.component)}
              key={route.path} />
          )
        }
      })
    )
  }
  console.log(genLayout(routes))
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content>
        <Routes>
          {genLayout(routes)}
        </Routes>
      </Content>
    </Layout>
  )
}

export default Component
