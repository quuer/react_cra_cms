import React, { useEffect, useState } from 'react'
import { Affix, Layout, Tag } from 'antd'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'
import { routes } from '../config/router'
import styles from './index.less'
import { connect } from 'react-redux'

const Component = (props) => {
  const { dispatch, tags, curKeyPath, expandKeyPath } = props
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
              key={route.path} />
          )
        }
      })
    )
  }

  return (
    <Layout className={styles.layout}>
      <Affix offsetTop={65}>
        <div className={styles.tags}>
          {tags.map(item => {
            return (
              <Tag
                color={item[0] === curKeyPath?.paths?.[0] ? '#108EE9' : null}
                onClose={() => {
                  if (tags.length > 1) {
                    dispatch({
                      type: 'global/removeNavTag', payload: {
                        item,
                        callback: (newTags) => {
                          console.log(newTags, '◀◀◀newTags')
                          navigate(newTags.at(-1)[0])
                        }
                      }
                    })
                  }
                  else {
                    navigate('/dashboard')
                  }
                }}
                style={{ cursor: 'pointer' }}
                closable={item[0] !== '/dashboard'} // 首页 不能有删除功能
                key={item[1]}
                onClick={() => {
                  navigate(item[0])
                  const temExpandKeyPath = [...expandKeyPath, ...curKeyPath.paths]
                  // console.log([...new Set(temExpandKeyPath)], '◀◀◀[...new Set(temExpandKeyPath)]')
                  dispatch({ type: 'global/setState', payload: { expandKeyPath: [...new Set(temExpandKeyPath)] } })
                }}
              ><span style={{ padding: 4 }}>{item[1]}</span></Tag>
            )
          })}
        </div>
      </Affix>
      <div className={styles.content}>
        <Routes>
          {genLayout(routes)}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Layout>
  )
}

const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
