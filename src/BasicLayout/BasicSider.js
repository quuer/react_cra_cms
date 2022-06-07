import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Layout, Menu } from 'antd'
import { routes } from '../config/router'
import session from '../utils/session'

const { Sider } = Layout

const Component = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [keyPath, setKeyPath] = useState([])

  const genSiderMenu = routes => {
    return (routes.filter(route => route.isMenu === undefined).map(route => {
      if (route.children?.length > 0) { // 1. 若有子路由，递归生成子菜单，生成时排除没有isMenu的对象
        return {
          label: route.name, key: route.path, icon: route.icon, children: genSiderMenu(route.children)
        }
      }
      else { // 2. 无子路由
        return {
          label: route.name, key: route.path, icon: route.icon
        }
      }
    }))
  }

  const onClick = (e) => {
    // 缓存点击的路由：页面刷新时仍选中刷新前的菜单，同时收缩所有非选中菜单
    session.set('tabKey', { keyPath: e.keyPath })
    navigate(e.key)
  }

  /* 动态关联 路由URL 与 左侧导航菜单
*  1 若手动输入的URL合法，则动态关联对应左侧导航菜单高亮
*  2 若手动输入的URL不合法，则
*   2.1 显示404
*   2.2 取消左侧菜单高亮
* */
  useEffect(() => {
    const temKeyPathList = []
    const genKeyPath = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path)
      })
      if (!matchRoute) return
      temKeyPathList.unshift(matchRoute.path)
      if (matchRoute?.children) {
        genKeyPath(matchRoute.children)
      }
    }
    genKeyPath(routes)
    console.log(temKeyPathList, '◀◀◀temKeyPathList')
    session.set('tabKey', { keyPath: temKeyPathList })
    setKeyPath(temKeyPathList)
  }, [pathname])

  return (<Sider>
    <Menu
      // 主题
      theme="dark"
      style={{ height: '100%' }}
      onClick={onClick}
      mode="inline"
      items={genSiderMenu(routes)}
      // 选中高亮项：刷新会导致keyPath清空，故保存在sessionStorage中
      selectedKeys={keyPath.length > 0 ? keyPath : session.get('tabKey')?.keyPath}
      // 展开项：也可用openKeys，但需要根据onSelect实时修改openKeys的值，否则展开不了
      defaultOpenKeys={keyPath.length > 0 ? keyPath : session.get('tabKey')?.keyPath}
    />
  </Sider>)
}

export default Component
