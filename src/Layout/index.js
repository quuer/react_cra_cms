import React, { Suspense, useEffect } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import BasicHeader from './BasicHeader'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import LazyLoading from '../components/LazyLoading'
import styles from './index.less'
import { useLocation, useNavigate } from 'react-router'

const Component = (props) => {
  console.log(props, '◀◀◀props')
  const location = useLocation()
  console.log(location, '◀◀◀location')

  return (
    <Layout className={styles.layout}>
      <BasicSider />
      <Layout>
        <BasicHeader />
        <Suspense fallback={<LazyLoading />}>
          <BasicContent />
        </Suspense>
      </Layout>
    </Layout>
  )
}

const mapState = ({ login }) => login

export default connect(mapState)(Component)
