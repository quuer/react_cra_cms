import React from 'react'
import { Alert } from 'antd'
import { Outlet } from 'react-router'

const Component = () => {
  return (
    <div>
      <div>
        <Alert message={
          (<>
            <div>菜单1-2</div>
            <Outlet />
          </>)
        } type="success" />
      </div>
    </div>
  )
}

export default Component
