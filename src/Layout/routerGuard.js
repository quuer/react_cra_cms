import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import session from '../utils/session'
import { onRouteBefore } from '../config/router'
import { useLocation } from 'react-router'

const Component = (props) => {
  const { token, children } = props
  const isLogin = token || session.getToken()
  const location = useLocation()

  // const pathRes = onRouteBefore({ pathname, meta })
  // const pathResType = Object.prototype.toString.call(pathRes).match(/s(w+)]/)[1]
  // if (pathResType === 'Promise') {
  //   pathRes.then(res => {
  //     if (res && res !== pathname) {
  //       navigate(res, { replace: true })
  //     }
  //   })
  // }
  // else {
  //   if (pathRes && pathRes !== pathname) {
  //     element = <Navigate to={pathRes} replace={true} />
  //   }
  // }
  // return element

  return isLogin ? <>{children}</> : <Navigate replace={true} to="/login" />

}
const mapState = ({ login }) => login
export default connect(mapState)(Component)
