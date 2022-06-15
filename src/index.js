import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { HashRouter as Router } from 'react-router-dom'

import Layout from './Layout'
import store from './store'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import './assets/css/reset.less'
import '@icon-park/react/styles/index.less'
// 若要动态修改antd主题，需要引入antd.variable.min.css
import 'antd/dist/antd.variable.min.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
// import 'antd/dist/antd.min.css'
moment.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Layout />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Provider>
    </ConfigProvider>
  </Router>
)


