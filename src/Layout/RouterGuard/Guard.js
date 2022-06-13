import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { getDataType } from '../../utils/fn'
import { onRouteBefore } from './fn'

const Component = (props) => {
  let { element, meta } = props
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  console.log(element, meta, pathname, '◀◀◀props')
  const pathRes = onRouteBefore({ pathname, meta })
  if (getDataType(pathRes) === 'Promise') {
    pathRes.then(res => {
      if (res && res !== pathname) {
        navigate(res, { replace: true })
      }
    })
  }
  else {
    if (pathRes && pathRes !== pathname) {
      element = <Navigate to={pathRes} replace={true} />
    }
  }
  return element
}

export default Component
