import React from 'react'
import { Outlet } from 'react-router'
import { Alert } from 'antd'

const Component = () => {
  return (
    <div>
      <div>
        <Alert message={
          (<>
            <div>菜单1</div>
            <Outlet />
          </>)
        } type="info" />
      </div>
    </div>
  )
}

export default Component
