import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Affix, Layout, Menu } from 'antd'
import { routes } from '../config/router'
import { connect } from 'react-redux'
import styles from './index.less'

const { Sider } = Layout

const Component = (props) => {
  const { dispatch, collapsed, theme, curKeyPath, expandKeyPath } = props
  const navigate = useNavigate()
  const { pathname } = useLocation()
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
    dispatch({
      type: 'global/renderNavTags', payload: {
        tagPath: e.key, tagLabel: e.domEvent.target.innerText
      }
    })
    navigate(e.key)
  }

  /* 动态关联 路由URL 与 左侧导航菜单
*  1 若手动输入的URL合法，则动态关联对应左侧导航菜单高亮
*  2 若手动输入的URL不合法，则
*   2.1 显示404
*   2.2 取消左侧菜单高亮
* */
  useEffect(() => {
    const temPaths = []
    const temLabels = []
    let curKeyPath = {}
    const genKeyPath = (routes) => {
      const matchRoute = routes.find(route => {
        return pathname.includes(route.path)
      })
      if (!matchRoute) return
      temPaths.unshift(matchRoute.path)
      temLabels.unshift(matchRoute.name)
      curKeyPath = {
        labels: temLabels, paths: temPaths
      }
      if (matchRoute?.children) {
        genKeyPath(matchRoute.children)
      }
    }
    genKeyPath(routes)
    console.log(curKeyPath, '◀◀◀curKeyPath')
    dispatch({ type: 'global/setState', payload: { curKeyPath } })
    dispatch({
      type: 'global/renderNavTags', payload: {
        tagPath: temPaths[0], tagLabel: temLabels[0]
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
