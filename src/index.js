import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'

import BasicLayout from './BasicLayout'
import store from './store'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

moment.locale('zh-cn')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <BasicLayout />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
