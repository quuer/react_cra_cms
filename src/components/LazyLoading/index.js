import React from 'react'
import { Spin } from 'antd'
import styles from './index.less'

const Component = () => {
  return (<div className={styles.lazy}>
    <Spin spinning />
  </div>)
}

export default Component
