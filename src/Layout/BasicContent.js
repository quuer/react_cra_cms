import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { Layout, Tag } from 'antd'
import { useLocation, useNavigate } from 'react-router'
import { routes } from '../config/router'
import RouterGuard from './RouterGuard'
import styles from './index.less'
import LazyLoading from '../components/LazyLoading'

const Component = (props) => {
  const { dispatch, tags } = props
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  return (
    <Layout className={styles.layout}>
      <div className={styles.tags}>
        {!['/404'].includes(pathname) &&
          tags.filter(item => Boolean(item[1])).map((item, index) => {
            return (
              <Tag
                color={item[0] === pathname ? '#108EE9' : null}
                onClose={() => {
                  if (tags.length > 1) {
                    if (item[0] === pathname) { //  若删除当前高亮项，则删除后高亮最后一项
                      dispatch({
                        type: 'global/removeNavTag', payload: {
                          item,
                          callback: (newTags) => {
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
                }}>
                <span style={{ padding: 4 }}>{item[1]}</span></Tag>
            )
          })}
      </div>
      <div className={styles.content}>
        <Suspense fallback={<LazyLoading />}>
          <RouterGuard routes={routes} />
        </Suspense>
      </div>
    </Layout>
  )
}

const mapState = ({ global }) => global
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
