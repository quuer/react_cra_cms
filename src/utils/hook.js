import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

export const useRedirect = (currentPath, redirectPath) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  console.log(pathname, '◀◀◀pathname')
  useEffect(() => {
    if (currentPath.includes(pathname))
      navigate(redirectPath, { replace: true })
  })
}
