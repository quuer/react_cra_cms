import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import BasicHeader from './BasicHeader'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import Login from '../pages/Login'
import RouterGuard from './routerGuard'
import LazyLoading from '../components/LazyLoading'
import styles from './index.less'

const Component = (props) => {

  // 需要登录才可显示主页面
  const PrivatePage = () => {
    return (
      <Layout className={styles.layout}>
        <BasicSider />
        <Layout>
          <BasicHeader />
          <Suspense fallback={<LazyLoading />}>
            <BasicContent />
          </Suspense>
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
