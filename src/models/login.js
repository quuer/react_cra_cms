import session from '../utils/session'

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
      session.set('session', { token: 1 })
      dispatch({ type: 'login/setState', payload: { token: 1 } }) // 推荐写法,payload为固定写法
    }
  })
}
export default global
