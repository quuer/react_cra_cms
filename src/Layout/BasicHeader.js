import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { Affix, Avatar, Breadcrumb, Dropdown, Layout, Menu } from 'antd'
import {
  CloseSquareOutlined,
  GithubOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined
} from '@ant-design/icons'
import session from '../utils/session'
import styles from './index.less'
import AVATAR from '../assets/image/avatar1.gif'

const { Header } = Layout

const Component = (props) => {
  const { dispatch, collapsed, curKeyPath } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: 'personal',
          label: (<a onClick={() => {
            navigate('/personal')
          }}>个人中心</a>), icon: <UserAddOutlined />
        },
        {
          key: 'github',
          label: (<a target="_blank" href="https://github.com/quuer/react_cra_cms" rel="noreferrer">项目地址</a>),
          icon: <GithubOutlined />
        },
        {
          key: 'logout',
          danger: true,
          label: (<a onClick={() => {
            session.clear()

            navigate('/login', { replace: true })
          }}>退出</a>),
          icon: <CloseSquareOutlined />
        }
      ]}
    />
  )

  return (

    <Affix offsetTop={0}>
      <Header className={styles.header}>
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
                separator={<span className={styles.light}>/</span>}
                style={{ margin: '16px 0' }}
              >
                <Breadcrumb.Item
                  onClick={() => {
                    navigate('/dashboard')
                  }}
                  className={styles.light}
                  style={{ cursor: 'pointer' }}>
                  <HomeOutlined />
                </Breadcrumb.Item>
                {[...curKeyPath.labels].reverse().map((item, index) => {
                  return (
                    <Breadcrumb.Item key={item + index} className={styles.light}
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
    </Affix>
  )
}
const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })
export default connect(mapState, mapDispatch)(Component)
