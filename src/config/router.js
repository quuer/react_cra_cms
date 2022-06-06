import React from 'react'
import { Route, Routes } from 'react-router'
import {
  AppstoreAddOutlined,
  DashboardOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  TeamOutlined
} from '@ant-design/icons'
import DashBoard from '../pages/DashBoard'
import Components from '../pages/Components'
import Permission from '../pages/Permission'
import Pdf from '../pages/Pdf'
import Excel from '../pages/Excel'

export const routes = [
  {
    path: '/dashboard',
    name: '首页',
    component: DashBoard,
    icon: <DashboardOutlined />,
    exact: true
  },
  {
    path: '/components',
    name: '组件',
    component: Components,
    icon: <AppstoreAddOutlined />,
    exact: true,
    children: [
      {
        path: '/components/pdf',
        name: 'pdf',
        component: Pdf,
        icon: <FilePdfOutlined />,
        exact: true
      },
      {
        path: '/components/excel',
        name: 'excel',
        component: Excel,
        icon: <FileExcelOutlined />,
        exact: true
      }
    ]
  },
  {
    path: '/permission',
    name: '权限',
    component: Permission,
    icon: <TeamOutlined />,
    exact: true
  }
]


