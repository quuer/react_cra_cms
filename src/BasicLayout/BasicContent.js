import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout } from 'antd'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { routes } from '../config/router'
import session from '../utils/session'

const { Content } = Layout

const Component = () => {
  const location = useLocation()
  const { pathname } = location
  const [BreadcrumbList, setBreadcrumbList] = useState([])
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

  useEffect(() => {
    const temBreadcrumbList = []
    const genBreadcrumb = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path)
      })
      temBreadcrumbList.push(matchRoute.name)
      if (matchRoute?.children) {
        genBreadcrumb(matchRoute.children)
      }
    }
    genBreadcrumb(routes)
    setBreadcrumbList(temBreadcrumbList)
  }, [pathname])

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      {/*面包屑导航条*/}
      <Breadcrumb style={{ margin: '16px 0' }}>
        {BreadcrumbList.length && BreadcrumbList.map(item => {
          return (<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
        })}
      </Breadcrumb>
      <Content>
        <Routes>
          {genLayout(routes)}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default Component
