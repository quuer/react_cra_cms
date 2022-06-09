import { init } from '@rematch/core'
import models from './models'
import storage from 'redux-persist/lib/storage'
import persistPlugin from '@rematch/persist'

const persistConfig = {
  key: 'root',
  storage
}

const store = init({
  // 开发模式下暂关闭plugins，避免数据异常
  plugins: [persistPlugin(persistConfig)],
  models
})

export default store


