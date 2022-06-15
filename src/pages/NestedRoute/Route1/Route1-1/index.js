import React from 'react'
import { Alert } from 'antd'

const Component = () => {
  return (
    <div>
      <div>
        <Alert message={
          (<>
            <div>菜单1-1</div>
          </>)
        } type="warning" />
      </div>
    </div>
  )
}

export default Component
