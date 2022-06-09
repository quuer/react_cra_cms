import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { HashRouter, BrowserRouter } from 'react-router-dom'

import BasicLayout from './BasicLayout'
import store from './store'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
// import 'antd/dist/antd.min.css'
// 若要修改antd主题，需要引入下方的css
import 'antd/dist/antd.variable.min.css'

import './assets/css/reset.less'
import '@icon-park/react/styles/index.less'

moment.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <BasicLayout />
        </Provider>
      </ConfigProvider>
    </HashRouter>
  // </React.StrictMode>
)
