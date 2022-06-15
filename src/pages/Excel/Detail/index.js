import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Outlet, useLocation, useParams } from 'react-router'

const Component = () => {
  const location = useLocation()
  console.log(location, '◀◀◀location--detail')
  const [searchParams] = useSearchParams()
  const { id } = useParams()
  console.log(searchParams.get('id'), id, '◀◀◀searchParams')
  return (<div>
    <div>detail</div>
    {id}
    <Outlet />
  </div>)
}

export default Component
