import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes, transformRoutes, onRouteBefore } from '../../config/router'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { getDataType } from '../../utils/fn'

const RouterGrard = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  const { meta } = props

  const RenderRoutes = () => {
    const reactRoutes = transformRoutes(routes)
    return useRoutes(reactRoutes)
  }

  if (onRouteBefore) {
    // if (temp === element) {
    //   return element
    // }
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
        return <Navigate to={pathRes} replace />
      }
    }
  }
}

export default RouterGrard
