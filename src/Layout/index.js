import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import BasicHeader from './BasicHeader'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import styles from './index.less'
import { Navigate} from 'react-router'
import session from '../utils/session'

const Component = () => {
  return (
    !session.get('session')?.token ?
      <Navigate to="/login" replace /> :
      (
        <Layout className={styles.layout}>
          <BasicSider />
          <Layout>
            <BasicHeader />
            <BasicContent />
          </Layout>
        </Layout>
      )
  )
}

const mapState = ({ login }) => login

export default connect(mapState)(Component)
