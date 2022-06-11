import React, { lazy } from 'react'
import {
  AppstoreAddOutlined,
  ClusterOutlined,
  DashboardOutlined,
  FileExcelOutlined,
  FileJpgOutlined,
  FilePdfOutlined,
  LineChartOutlined,
  ProjectOutlined,
  TeamOutlined
} from '@ant-design/icons'
import NotFound from '../pages/NotFound'

export const routes = [
  {
    path: '/dashboard',
    name: '首页',
    component: lazy(() => import('../pages/DashBoard')),
    icon: <DashboardOutlined />
  },
  {
    path: '/components',
    name: '组件',
    icon: <AppstoreAddOutlined />,
    children: [
      {
        path: '/components/pdf',
        name: 'PDF',
        component: lazy(() => import('../pages/Pdf')),
        icon: <FilePdfOutlined />
      },
      {
        path: '/components/excel',
        name: 'EXCEL',
        component: lazy(() => import('../pages/Excel')),
        icon: <FileExcelOutlined />
      },
      {
        path: '/components/image',
        name: '图片',
        component: lazy(() => import('../pages/Image')),
        icon: <FileJpgOutlined />
      },
      {
        path: '/components/richtexteditor',
        name: '富文本编辑',
        component: lazy(() => import('../pages/RichTextEditor')),
        icon: <ProjectOutlined />
      }
    ]
  },
  {
    path: '/permission',
    name: '权限',
    component: lazy(() => import('../pages/Permission')),
    icon: <TeamOutlined />
  },
  {
    path: '/nestedroute',
    name: '嵌套路由',
    icon: <ClusterOutlined />,
    children: [
      {
        path: '/nestedroute/route_1',
        name: '1',
        component: lazy(() => import('../pages/NestedRoute')),
        icon: <FilePdfOutlined />,
        children: [
          {
            path: '/nestedroute/route_1/route_1_1',
            name: '1-1',
            component: lazy(() => import('../pages/NestedRoute')),
            icon: <FilePdfOutlined />,
            children: [
              {
                path: '/nestedroute/route_1/route_1_1/route_1_1_1',
                name: '1-1-1',
                component: lazy(() => import('../pages/NestedRoute')),
                icon: <FilePdfOutlined />
              }
            ]
          }
        ]
      },
      {
        path: '/nestedroute/route_2',
        name: '2',
        component: lazy(() => import('../pages/NestedRoute')),
        icon: <FilePdfOutlined />,
        children: [
          {
            path: '/nestedroute/route_2/route_2_2',
            name: '2-1',
            component: lazy(() => import('../pages/NestedRoute')),
            icon: <FilePdfOutlined />
          }
        ]
      }
    ]
  },
  {
    path: '/echart',
    name: '图表',
    component: lazy(() => import('../pages/Echart')),
    icon: <LineChartOutlined />
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    isMenu: false
  },
  {
    path: '/personpage',
    name: '个人页面',
    component: lazy(() => import('../pages/Personal')),
    isMenu: false
  },
  {
    path: '/personal1',
    name: '个人页面1',
    component: lazy(() => import('../pages/Personal')),
    icon: <LineChartOutlined />
  }
]


