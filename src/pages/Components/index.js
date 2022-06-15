import React,  from 'react'
import { Outlet, useLocation,  } from 'react-router'
import styles from './index.less'

const Component = () => {
  const { pathname } = useLocation()
  console.log(pathname, '◀◀◀pathname')
  // useRedirect(pathname)
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  )
}

export default Component
