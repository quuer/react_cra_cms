import React from 'react'
import { Alert } from 'antd'
import NestedRouteThree from '../NestedRouteThree'

const Component = () => {
  return (
    <div>
      <Alert message={
        (<>
          <div>菜单2</div>
          <NestedRouteThree />
        </>)
      } type="success" />
    </div>
  )
}

export default Component
