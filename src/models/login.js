import { message } from 'antd'
import session from '../utils/session'
import ErrorNotice from '../utils/error'

const global = {
  name: 'login',
  state: {
    token: null
  },
  reducers: {
    setState(state, newState) {
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    async login(payload) {
      const { user_name, password, callback } = payload
      if (!['admin', 'employee'].includes(user_name)) {
        return ErrorNotice('您输入的账号不正确')
      }
      if (password !== '123456') {
        return ErrorNotice('您输入的密码不正确')
      }
      message.success('登录成功')
      callback && callback()
      const token = 'tokentest' + user_name
      session.set('session', { token })
      dispatch({ type: 'login/setState', payload: { token } })
    }
  })
}
export default global
