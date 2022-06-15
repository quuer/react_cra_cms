import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router'
import { Affix, Layout, Menu } from 'antd'
import { routes } from '../config/router'
import styles from './index.less'

const { Sider } = Layout

const Component = (props) => {
  let { dispatch, collapsed, curKeyPath, expandKeyPath } = props
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const genSiderMenu = routes => {
    return (
      routes.filter(route => !route.siderHidden).map(route => { // 1. 若有子路由，递归生成子菜单。生成时排除siderHidden为true即需要隐藏的对象
        if (!route.siderChildrenHidden && route.children?.length > 0) {
          return {
            label: route.meta?.title,
            key: route.index || route.path,
            icon: route.meta?.icon,
            children: genSiderMenu(route.children)
          }
        }
        else { // 2. 无子路由
          return {
            label: route.meta?.title,
            key: route.index || route.path,
            icon: route.meta?.icon
          }
        }
      }))
  }

  const onClick = (e) => {
    console.log(e, '◀◀◀e')
    let redirectPath = e.key
    const findRedirect = (routes) => {
      const res = routes.find(item => e.key.includes(item.path.split('/:').join('')))
      if (!res) return
      if (res.index) {
        redirectPath = res.index
      }
      if (res.children) {
        findRedirect(res.children)
      }
    }
    findRedirect(routes)
    navigate(redirectPath)
  }

  /* 动态关联 路由URL 与 左侧导航菜单
*  1 若手动输入的URL合法，则动态关联对应左侧导航菜单高亮
*  2 若手动输入的URL不合法，则
*   2.1 显示404
*   2.2 取消左侧菜单高亮
* */

  // 生成curKeyPath:用于展开和高亮sider菜单。当不需要渲染子项目时停止递归。
  useEffect(() => {
    if (pathname === '/404') return
    const temPaths = []
    const temLabels = []
    let curKeyPath = {}
    const genKeyPath = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path.split('/:')[0])
      })
      if (!matchRoute) return
      temPaths.unshift(matchRoute.path)
      temLabels.unshift(matchRoute.meta?.title)
      if (matchRoute.index) {
        temPaths.unshift(matchRoute.index)
      }
      curKeyPath = {
        labels: temLabels, paths: temPaths
      }
      if (!matchRoute.siderChildrenHidden && matchRoute.children) {
        genKeyPath(matchRoute.children)
      }
    }
    genKeyPath(routes)
    dispatch({ type: 'global/setState', payload: { curKeyPath } })
  }, [pathname])

  // 生成navTag:用于展示tags导航菜单。一直往里匹配到最适路由。
  useEffect(() => {
    if (pathname === '/404') return
    let temTagLabel = ''
    const genNavTag = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path.split('/:')[0])
      })
      if (!matchRoute) return
      if (matchRoute.path.includes('/:')) {
        temTagLabel = `${matchRoute.meta?.title}-${pathname.slice(-4, -1)}`
      }
      else {
        temTagLabel = matchRoute.meta?.title
      }
      if (matchRoute.children?.length) {
        genNavTag(matchRoute.children)
      }
    }
    genNavTag(routes)
    dispatch({
      type: 'global/renderNavTags', payload: {
        tagPath: pathname, tagLabel: temTagLabel
      }
    })
  }, [pathname])

  const defaultProps = collapsed ? {} : { openKeys: expandKeyPath.length > 0 ? expandKeyPath : curKeyPath.paths }
  return (
    <Affix offsetTop={0}>
      <Sider
        trigger={null}
        collapsible
        className={styles.sider}
        collapsed={collapsed}>
        <Menu
          theme="dark"
          style={{ height: '100%' }}
          onClick={onClick}
          mode="inline"
          items={genSiderMenu(routes)}
          defaultOpenKeys={curKeyPath.paths}
          selectedKeys={curKeyPath.paths}
          // TODO：ANTD-MENU 4.20 疑似bug：opOpenChange的值与展开收起的submenu不匹配
          onOpenChange={(e) => {
            dispatch({ type: 'global/setState', payload: { expandKeyPath: e } })
          }}
          {...defaultProps}
        />
      </Sider>
    </Affix>)
}

const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
