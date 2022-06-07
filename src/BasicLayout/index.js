import React from 'react'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import BasicHeader from './BasicHeader'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import { connect } from 'react-redux'
import RouterGuard from './routerGuard'

const Component = (props) => {

  // 需要登录才可显示
  const PrivatePage = () => {
    return (
      <Layout>
        <BasicHeader />
        <Layout style={{ height: 'calc(100vh - 64px' }}>
          <BasicSider />
          <BasicContent />
        </Layout>
      </Layout>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<RouterGuard> <PrivatePage /> </RouterGuard>} />
      <Route path="/login" element={<Login />} />
    </Routes>

  )
}

const mapState = ({ login }) => login

export default connect(mapState)(Component)
