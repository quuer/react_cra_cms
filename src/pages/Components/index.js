import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { useRedirect } from '../../utils/hook'
import styles from './index.less'

const Component = () => {
  // const { pathname } = useLocation()
  // const navigate = useNavigate()
  // console.log(pathname, '◀◀◀pathname')
  // useEffect(() => {
  //   if ('/components/'.includes(pathname))
  //     navigate('/components/pdf')
  // })
  useRedirect('/components/','/components/pdf')
  return (
    <div className={styles.nested_container}>
      <Outlet />
    </div>
  )
}

export default Component
