import React, { useEffect, useState } from 'react'
import { Layout, Tag } from 'antd'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'
import { routes } from '../config/router'
import styles from './index.less'
import { connect } from 'react-redux'

const Component = (props) => {
  const { dispatch, currentTabKey, tags } = props
  const navigate = useNavigate()
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

  return (
    <Layout style={{ padding: '5px 15px' }}>
      <div className={styles.tags}>
        {tags.map(item => {
          if (item[1] === '/dashboard') {
            return <Tag
              key="dashboard"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(item[1])
                dispatch({ type: 'global/setState', payload: { currentTabKey: item } })
              }}
              color={item[1] === currentTabKey[1] ? '#108EE9' : null}>{item[0]}</Tag>
          }
          return (
            <Tag
              color={item[1] === currentTabKey[1] ? '#108EE9' : null}
              onClose={() => {
                dispatch({
                  type: 'global/removeNavTag', payload: {
                    item,
                    callback: (newTags) => {
                      console.log(newTags, '◀◀◀tags')
                      // 若删除的为高亮tag，则删除后高亮最后一个tag，否则仅删除
                      if (item[0] === currentTabKey[0]) {
                        // 删除至仅剩余1个tag
                        if (newTags.length > 0) {
                          navigate(newTags.at(-1)[1])
                          dispatch({ type: 'global/setState', payload: { currentTabKey: newTags.at(-1) } })
                          return
                        }
                        navigate('/dashboard')
                        dispatch({ type: 'global/setState', payload: { currentTabKey: ['首页', '/dashboard'] } })

                      }
                    }
                  }
                })
              }}
              style={{ cursor: 'pointer' }}
              closable
              key={item[1]}
              onClick={() => {
                navigate(item[1])
                dispatch({ type: 'global/setState', payload: { currentTabKey: item } })
              }}
            >{item[0]}</Tag>
          )
        })}
      </div>
      <Routes>
        {genLayout(routes)}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Layout>
  )
}

const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
