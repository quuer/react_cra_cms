import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { routes } from '../config/router'

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

  return (
    <Layout style={{ padding: '12px 15px' }}>
      <Routes>
        {genLayout(routes)}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Layout>
  )
}
export default Component
