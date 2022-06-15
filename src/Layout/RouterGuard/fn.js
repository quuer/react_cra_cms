import React from 'react'
import { Navigate } from 'react-router'
import Guard from './Guard'
import session from '../../utils/session'

/**
 * @description 路由拦截
 * @element 当前路由下的组件
 * @pathname 当前路由
 * @meta 当前路由下的meta配置
 */
export const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta?.title !== undefined) {
    document.title = meta.title
  }
  // 判断未登录跳转登录页
  if (!session.get('session')?.token) {
    return '/login'
  }
  else {
    return pathname
  }
}

/**
 * @description 将自定义路由配置转为react-router v6 版本useRoutes要求的格式
 * @routes 自定义配置路由表
 */
export const transToUseRoutes = (routes) => {
  const routeList = []
  routes.forEach(_route => {
    const route = { ..._route }
    if (route.path === undefined) return
    if (route.redirect) {
      route.element = <Navigate to={route.redirect} replace />
    }
    if (route.component) {
      route.element = <Guard element={<route.component meta={route.meta} />} />
    }
    delete route.redirect
    delete route.component
    delete route.meta
    if (route.children) {
      route.children = transToUseRoutes(route.children)
    }
    routeList.push(route)
  })
  return routeList
}
