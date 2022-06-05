const global = {
  name: 'a',
  state: {
    a: 5
  },
  reducers: {
    setState(state, newState) {
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload) {
      console.log('payload', payload)
      // dispatch.index.setState({ a: 2 }) 或下面一种写法
      dispatch({ type: 'index/setState', payload:{a:1} }) // 推荐写法,payload为固定写法
    }
  })
}
export default global
