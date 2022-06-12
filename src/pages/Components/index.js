import React from 'react'
import styles from './index.less'
import { Outlet } from 'react-router'

const Component = () => {
  return (
    <div className={styles.nested_container}>
      <Outlet />
    </div>
  )
}

export default Component
