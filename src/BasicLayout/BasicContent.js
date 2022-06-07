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

  /* 动态关联 左侧导航菜单 与 面包屑：本质还是路由URL关联面包屑
  *  面包屑会逐层显示左侧导航菜单的层级，用 / 隔开
  *  */
  useEffect(() => {
    console.log(pathname, '◀◀◀pathname')
    const temBreadcrumbList = []
    const genBreadcrumb = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path)
      })
      if (!matchRoute) return
      temBreadcrumbList.push(matchRoute.name)
      if (matchRoute?.children) {
        genBreadcrumb(matchRoute.children)
      }
    }
    genBreadcrumb(routes)
    console.log(temBreadcrumbList, '◀◀◀temBreadcrumbList')
    setBreadcrumbList(temBreadcrumbList)
  }, [pathname])

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      {/*面包屑导航条：404页面不需要显示面包屑*/}
      {pathname !== '/404' && BreadcrumbList.length &&
        <Breadcrumb style={{ margin: '16px 0' }}>
          {BreadcrumbList.map(item => {
            return (<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
          })}
        </Breadcrumb>
      }
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
