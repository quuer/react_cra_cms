import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router'
import { routes } from '../config/router'
import session from '../utils/session'

const { Sider } = Layout

const Component = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [keyPath, setKeyPath] = useState([])
  console.log(pathname, '◀◀◀pathname')
  const genSiderMenuItems = routes => {
    return (
      routes.filter(route => route.isMenu === undefined).map(route => {
        if (route.children?.length > 0) { // 1. 若有子路由，递归生成子菜单
          return {
            label: route.name,
            key: route.path,
            icon: route.icon,
            children: genSiderMenuItems(route.children)
          }
        }
        else { // 2. 无子路由
          return {
            label: route.name,
            key: route.path,
            icon: route.icon
          }
        }
      })
    )
  }

  const onClick = (e) => {
    const { key, keyPath } = e
    // 缓存点击的路由：页面刷新时仍选中刷新前的菜单，同时收缩所有非选中菜单
    session.set('tabKey', { key, keyPath })
    navigate(e.key)
  }
  useEffect(() => {
    const temKeyPathList = []
    const genKeyPath = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path)
      })
      temKeyPathList.unshift(matchRoute.path)
      if (matchRoute?.children) {
        genKeyPath(matchRoute.children)
      }
    }
    genKeyPath(routes)
    console.log(temKeyPathList, '◀◀◀temKeyPathList')
    setKeyPath(temKeyPathList)
  }, [pathname])

  return (
    <Sider>
      <Menu
        onClick={onClick}
        style={{ height: '100%' }}
        selectedKeys={keyPath.length > 0 ? keyPath : session.get('tabKey')?.keyPath}
        defaultOpenKeys={keyPath.length > 0 ? keyPath : session.get('tabKey')?.keyPath}
        mode="inline"
        items={genSiderMenuItems(routes)}
      />
    </Sider>
  )
}

export default Component
