import React from 'react'
import { Alert } from 'antd'

const Component = () => {
  return (
    <div>
      <div>
        <Alert message={
          (<>
            <div>菜单1-2-1</div>
          </>)
        } type="info" />
      </div>
    </div>
  )
}

export default Component
