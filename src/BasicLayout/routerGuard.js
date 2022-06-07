import { Navigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import session from '../utils/session'

const Component = (props) => {
  const { token, children } = props
  const isLogin = token || session.getToken()
  /*
   * 1.已登录：显示内容
   * 2.未登录：重定向到 /login
  */
  return isLogin ? <>{children}</> : <Navigate replace={true} to="/login" />

}
const mapState = ({ login }) => login
export default connect(mapState)(Component)
