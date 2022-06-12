import React from 'react'
import { Alert } from 'antd'
import NestedRouteTwo from '../NestedRouteTwo'

const Component = () => {
  return (
    <>
      <Alert message={
        <>
          菜单1
          <NestedRouteTwo />
        </>
      } type="error" />
    </>
  )
}

export default Component
