const global = {
  name: 'global',
  state: {
    theme: 'light',
    collapsed: false,
    tags: [['首页', '/dashboard']], // 结构为[[tagName,tagPath],[同左边]]，用Map或对象数组[{tagName,tagPath},{}]均可
    currentTabKey: [] // 保存当前选中的菜单项，[tagName,tagPath]
  },
  reducers: {
    setState(state, newState) {
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    renderNavTags(payload, { global }) {
      const { tagName, tagPath } = payload
      const { tags } = global
      const tagsMap = new Map(tags)
      tagsMap.set(tagName, tagPath) // Map会保证key的唯一性
      dispatch({ type: 'global/setState', payload: { tags: [...tagsMap] } })
    },
    removeNavTag(payload, { global }) {
      const { item: [tagName], callback } = payload
      const { tags } = global
      const tagsMap = new Map(tags)
      console.log(tagName, '◀◀◀tagName')
      tagsMap.delete(tagName)
      dispatch({ type: 'global/setState', payload: { tags: [...tagsMap] } })
      callback && callback([...tagsMap])
    }
  })
}
export default global
