import React, { useEffect, useState } from 'react'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import BasicHeader from './BasicHeader'
import { Layout } from 'antd'
import session from '../utils/session'
import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import { connect } from 'react-redux'

const Component = (props) => {
  const { token } = props
  console.log(props, '◀◀◀props')
  const isLogin = token || session.getToken()
  return (
    <>
      {!isLogin ?
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
        :
        <Layout>
          <BasicHeader />
          <Layout style={{ height: 'calc(100vh - 64px' }}>
            <BasicSider />
            <BasicContent />
          </Layout>
        </Layout>}
    </>
  )
}

const mapState = ({ login }) => login

export default connect(mapState)(Component)
