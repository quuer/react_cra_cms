import React, { useEffect, useState } from 'react'
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, Space } from 'antd'
import { connect } from 'react-redux'

import {
  CloseSquareOutlined,
  DownOutlined, GithubOutlined, HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SmileOutlined, StarFilled, StarOutlined,
  UserAddOutlined
} from '@ant-design/icons'
import { routes } from '../config/router'
import { useLocation, useNavigate } from 'react-router'
import styles from './index.less'
import AVATAR from '../assets/image/avatar1.gif'
import { Brightness, DarkMode, IntermediateMode, Moon } from '@icon-park/react'
import classnames from 'classnames'

const { Header } = Layout

const Component = (props) => {
  const { dispatch, collapsed, theme, curKeyPath } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: 'personal',
          label: (<a onClick={() => {
            navigate('/personal')
          }}>个人中心</a>),
          icon: <UserAddOutlined />
        },
        {
          key: 'github',
          label: (<a target="_blank" href="https://github.com/quuer/react_cra_cms">项目地址</a>),
          icon: <GithubOutlined />
        },
        {
          key: 'logout',
          danger: true,
          label: (<a onClick={() => {
            console.log('log out', '◀◀◀"log out"')
          }}>退出</a>),
          icon: <CloseSquareOutlined />
        }
      ]}
    />
  )

  /* 动态关联 左侧导航菜单 与 面包屑：本质还是路由URL关联面包屑
  *  面包屑会逐层显示左侧导航菜单的层级，用 / 隔开
  *  */
  // useEffect(() => {
  //   const keyPathArr = []
  //   const temBreadcrumbList = []
  //   const genBreadcrumb = (routes) => {
  //     const matchRoute = routes.find(route => {
  //       return pathname.includes(route.path)
  //     })
  //     if (!matchRoute) return
  //     temBreadcrumbList.push([matchRoute.path, matchRoute.name])
  //     if (matchRoute?.children) {
  //       genBreadcrumb(matchRoute.children)
  //     }
  //   }
  //   genBreadcrumb(routes)
  //   console.log(temBreadcrumbList, '◀◀◀temBreadcrumbList')
  //   setBreadcrumbList(temBreadcrumbList)
  // }, [pathname])

  return (
    <>
      <Header className={classnames(theme === 'light' ? styles.theme_light : styles.theme_dark, styles.header)}>
        <div className={styles.header_left}>
          <div className={styles.collapse_icon} onClick={() => {
            dispatch({ type: 'global/setState', payload: { collapsed: !collapsed } })
          }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className={styles.breadcrumb}>
            {/*面包屑导航条：404页面不需要显示面包屑*/}
            {pathname !== '/404' && curKeyPath?.labels?.length &&
              <Breadcrumb
                separator={theme === 'light' ? <span className={styles.theme_light}>/</span> :
                  <span className={styles.theme_dark}>/</span>}
                style={{ margin: '16px 0' }}
              >
                <Breadcrumb.Item
                  onClick={() => {
                    navigate('/dashboard')
                  }}
                  className={theme === 'light' ? styles.theme_light : styles.theme_dark}
                  style={{ cursor: 'pointer' }}>
                  <HomeOutlined />
                </Breadcrumb.Item>
                {curKeyPath.labels.reverse().map(item => {
                  return (
                    <Breadcrumb.Item key={item} className={theme === 'light' ? styles.theme_light : styles.theme_dark}
                    >
                      {item}
                    </Breadcrumb.Item>
                  )
                })}
              </Breadcrumb>
            }
          </div>
        </div>
        <div className={styles.header_right}>
          <div className={styles.theme} onClick={() => {
            dispatch({ type: 'global/setState', payload: { theme: theme === 'light' ? 'dark' : 'light' } })
          }}>
            {theme === 'light' ?
              <IntermediateMode theme="filled" size="30" fill="#001529" /> :
              <IntermediateMode theme="outline" size="30" fill="#ffffff" />}
          </div>
          <div className={styles.personal}>
            <Dropdown
              arrow={{ pointAtCenter: true }}
              overlay={menu}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Avatar size="large" src={AVATAR} />
              </a>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  )
}
const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })
export default connect(mapState, mapDispatch)(Component)
