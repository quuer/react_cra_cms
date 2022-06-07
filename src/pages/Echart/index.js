import React from 'react'
import styles from './index.less'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'

const Component = () => {
  const params = useParams()
  const location = useLocation()
  console.log(params, location, '◀◀◀params')
  return (<div>echart</div>)
}

export default Component
