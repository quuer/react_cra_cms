import React, { useEffect } from 'react'
import styles from './index.less'
import { Outlet, useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'

const Component = () => {

  return (
    <div className={styles.nested_container}>
      <Outlet />
    </div>
  )
}

export default Component
