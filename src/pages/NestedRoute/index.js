import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'

const Component = () => {
  const { pathname } = useLocation()
  if (pathname === '/nestedroute' || pathname === '/nestedroute/') {
    return <Navigate to="/nestedroute/route1/route1-1" replace />
  }
  if (pathname === '/nestedroute/route1' || pathname === '/nestedroute/route1/') {
    return <Navigate to="/nestedroute/route1/route1-1" replace />
  }
  if (pathname === '/nestedroute/route1/route1-2' || pathname === '/nestedroute/route1/route1-2/') {
    return <Navigate to="/nestedroute/route1/route1-2/route1-2-1" replace />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Component
