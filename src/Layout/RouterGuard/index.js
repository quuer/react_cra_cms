import React from 'react'
import { useRoutes } from 'react-router-dom'
import { transToUseRoutes } from './fn'

const Component = (props) => {
  const { routes } = props
  return useRoutes(transToUseRoutes(routes))
}

export default Component
