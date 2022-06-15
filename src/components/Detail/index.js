import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Outlet, useParams } from 'react-router'

const Component = () => {
  const [searchParams] = useSearchParams()
  const { id } = useParams()
  console.log(searchParams.get('id'), id, '◀◀◀searchParams')
  return (<div>
    <div>detail</div>
    {searchParams}
    {id}
    <Outlet />
  </div>)
}

export default Component
