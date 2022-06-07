const global = {
  name: 'global',
  state: {
    globa: 5,
    theme: 'light',
    collapsed: false
  },
  reducers: {
    setState(state, newState) {
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({})
}
export default global
