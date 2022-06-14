import React from 'react'
import { Outlet } from 'react-router'
import styles from './index.less'

const Component = () => {

  return (
    <div className={styles.nested_container}>
      <Outlet />
    </div>
  )
}

export default Component
