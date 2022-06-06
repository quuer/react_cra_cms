import React from 'react'
import session from '../../utils/session'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'

const Component = (props) => {
  const { dispatch } = props
  const navigate = useNavigate()
  const onLogin = () => {
    dispatch({ type: 'login/login' })
    navigate('/dashboard')
  }
  return (<div>
    <Button onClick={onLogin}>登录</Button>
  </div>)
}

const mapState = ({ login }) => login
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)

