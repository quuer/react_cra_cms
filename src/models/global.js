const global = {
  name: 'global',
  state: {
    theme: 'light', // 默认light主题
    collapsed: false, // 默认展开左侧导航菜单
    curKeyPath: {},// 保存当前亮高的左侧导航菜单 {labels:[],paths:[]}

    tags: [['/dashboard', '首页']], // 结构为[[tagPath,tagName],[同左边]]，用Map或对象数组[{tagName,tagPath},{}]均可
    expandKeyPath: [],// 左侧展开菜单path
    fileList: [ // 保存上传的图片
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    ]
  },
  reducers: {
    setState(state, newState) {
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    renderNavTags(payload, { global }) {
      const { tagPath, tagLabel } = payload
      const { tags } = global
      const tagsMap = new Map(tags)
      tagsMap.set(tagPath, tagLabel) // Map会保证key的唯一性
      dispatch({ type: 'global/setState', payload: { tags: [...tagsMap] } })
    },
    removeNavTag(payload, { global }) {
      const { item: [tagPath], callback } = payload
      const { tags } = global
      const tagsMap = new Map(tags)
      tagsMap.delete(tagPath)
      dispatch({ type: 'global/setState', payload: { tags: [...tagsMap] } })
      callback && callback([...tagsMap])
    }
  })
}
export default global
