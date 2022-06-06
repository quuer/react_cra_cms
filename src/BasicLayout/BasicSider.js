import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router'
import { routes } from '../config/router'

const { Sider } = Layout
const Component = () => {
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
    console.log('click ', e)
    navigate(e.key)
  }

  return (
    <Sider>
      <Menu
        onClick={onClick}
        style={{ height: '100%' }}
        defaultSelectedKeys={['/dashboard']}
        defaultOpenKeys={[]}
        mode="inline"
        items={genSiderMenuItems(routes)}
      />
    </Sider>
  )
}

export default Component
