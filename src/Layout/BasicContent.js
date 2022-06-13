import React, { useContext } from 'react'
import { Layout, Tag } from 'antd'
import { useLocation, useNavigate } from 'react-router'
import { routes } from '../config/router'
import RouterGuard from './RouterGuard'
import { connect } from 'react-redux'
import styles from './index.less'
import './transition.css'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Component = (props) => {
  const { dispatch, tags, curKeyPath, expandKeyPath } = props
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  console.log(location, '◀◀◀location')
  return (
    <Layout className={styles.layout}>
      <div className={styles.tags}>
        {pathname !== '/404' && tags.map((item, index) => {
          return (
            <Tag
              color={item[0] === curKeyPath?.paths?.[0] ? '#108EE9' : null}
              onClose={() => {
                if (tags.length > 1) {
                  if (item[0] === curKeyPath?.paths?.[0]) { //  若删除当前高亮项，则删除后高亮最后一项
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
                    dispatch({ type: 'global/removeNavTag', payload: { item } })
                  }
                }
                else {
                  navigate('/dashboard')
                }
              }}
              style={{ cursor: 'pointer' }}
              closable={item[0] !== '/dashboard'} // 首页 不能有删除功能
              key={item[1] + index}
              onClick={() => {
                navigate(item[0])
                const temExpandKeyPath = [...expandKeyPath, ...curKeyPath.paths]
                dispatch({ type: 'global/setState', payload: { expandKeyPath: [...new Set(temExpandKeyPath)] } })
              }}
            ><span style={{ padding: 4 }}>{item[1]}</span></Tag>
          )
        })}
      </div>
      <div className={styles.content}>
        <RouterGuard routes={routes} />
      </div>
    </Layout>
  )
}

const mapState = (
  {
    global
  }
) => global
const mapDispatch = dispatch => (
  {
    dispatch
  }
)

export default connect(mapState, mapDispatch)(Component)
