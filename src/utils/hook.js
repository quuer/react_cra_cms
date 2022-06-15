import { useEffect } from 'react'
import { routes } from '../config/router'
import { useNavigate } from 'react-router'

export const useRedirect = (currentPath) => {
  const navigate = useNavigate()
  useEffect(() => {
    let redirectPath = currentPath
    const findRedirect = (routes) => {
      const res = routes.find(item => currentPath.includes(item.path.split('/:').join('')))
      if (!res) return
      if (res.index) {
        redirectPath = res.index
      }
      if (res.children) {
        findRedirect(res.children)
      }
    }
    findRedirect(routes)
    console.log(currentPath, redirectPath, 'xxxxxxxxxxxxxxxxxxxxxx')
    navigate(redirectPath, { replace: true })
  }, [])
}
