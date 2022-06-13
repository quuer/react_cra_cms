import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import BasicHeader from './BasicHeader'
import BasicSider from './BasicSider'
import BasicContent from './BasicContent'
import LazyLoading from '../components/LazyLoading'
import styles from './index.less'

const Component = () => {
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
