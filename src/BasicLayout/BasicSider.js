import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router'
import { routes } from '../config/router'
import session from '../utils/session'

const { Sider } = Layout
const Component = () => {
  const [activeKey, setActiveKey] = useState(['/dashboard'])
  const navigate = useNavigate()
  const genSiderMenuItems = routes => {
    return (
      routes.map(route => {
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

  return (
    <Sider>
      <Menu
        onClick={onClick}
        style={{ height: '100%' }}
        selectedKeys={session.get('tabKey')?.keyPath ?? ['/dashboard']}
        defaultOpenKeys={session.get('tabKey')?.keyPath}
        mode="inline"
        items={genSiderMenuItems(routes)}
      />
    </Sider>
  )
}

export default Component
