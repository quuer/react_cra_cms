import React from 'react'
import { Route, Routes } from 'react-router'
import {
  AppstoreAddOutlined, ClusterOutlined,
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
import NestedRoute from '../pages/NestedRoute'

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
        name: 'PDF',
        component: Pdf,
        icon: <FilePdfOutlined />,
        exact: true
      },
      {
        path: '/components/excel',
        name: 'EXCEL',
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
  },
  {
    path: '/nestedroute',
    name: '嵌套路由',
    icon: <ClusterOutlined />,
    children: [
      {
        path: '/nestedroute/route_1',
        name: '1',
        component: NestedRoute,
        icon: <FilePdfOutlined />,
        exact: true,
        children: [
          {
            path: '/nestedroute/route_1/route_1_1',
            name: '1-1',
            component: NestedRoute,
            icon: <FilePdfOutlined />,
            exact: true,
            children: [
              {
                path: '/nestedroute/route_1/route_1_1/route_1_1_1',
                name: '1-1-1',
                component: NestedRoute,
                icon: <FilePdfOutlined />,
                exact: true
              }
            ]
          }
        ]
      },
      {
        path: '/nestedroute/route_2',
        name: '2',
        component: NestedRoute,
        icon: <FilePdfOutlined />,
        exact: true,
        children: [
          {
            path: '/nestedroute/route_2/route_2_2',
            name: '2-1',
            component: NestedRoute,
            icon: <FilePdfOutlined />,
            exact: true
          }
        ]
      }
    ]
  }
]


