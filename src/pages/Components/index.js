import React, { useEffect } from 'react'
import styles from './index.less'
import { Outlet, useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'

const Component = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    console.log(1111, '◀◀◀1111')
    if (pathname === '/components') {
      navigate('/components/excel')
    }
  }, [pathname])
  return (
    <div className={styles.nested_container}>
      <Outlet />
    </div>
  )
}

export default Component
