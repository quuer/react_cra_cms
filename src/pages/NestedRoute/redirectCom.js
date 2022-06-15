import React from 'react'
import { Navigate } from 'react-router'

const Component=()=>{
  return (<>
    <Navigate to="/nestedroute/route1/route1-1" replace />
  </>)
}

export default Component
