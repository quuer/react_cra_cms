import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import BasicHeader from './BasicHeader'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import LazyLoading from '../components/LazyLoading'
import styles from './index.less'
import { Navigate, useLocation, useNavigate } from 'react-router'
import session from '../utils/session'

const Component = (props) => {
  return (
    !session.get('session')?.token ?
      <Navigate to="/login" replace /> :
      (<Layout className={styles.layout}>
        <BasicSider />
        <Layout>
          <BasicHeader />
          <Suspense fallback={<LazyLoading />}>
            <BasicContent />
          </Suspense>
        </Layout>
      </Layout>)
  )
}

const mapState = ({ login }) => login

export default connect(mapState)(Component)
