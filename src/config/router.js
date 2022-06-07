import React from 'react'
import {
  AppstoreAddOutlined, ClusterOutlined,
  DashboardOutlined,
  FileExcelOutlined, FileJpgOutlined,
  FilePdfOutlined, LineChartOutlined, ProjectOutlined,
  TeamOutlined
} from '@ant-design/icons'
import DashBoard from '../pages/DashBoard'
import Components from '../pages/Components'
import Permission from '../pages/Permission'
import Pdf from '../pages/Pdf'
import Excel from '../pages/Excel'
import NestedRoute from '../pages/NestedRoute'
import Image from '../pages/Image'
import RichTextEditor from '../pages/RichTextEditor'
import Echart from '../pages/Echart'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Personal from '../pages/Personal'

export const routes = [
  {
    path: '/dashboard',
    name: '首页',
    component: DashBoard,
    icon: <DashboardOutlined />
  },
  {
    path: '/components',
    name: '组件',
    component: Components,
    icon: <AppstoreAddOutlined />,
    children: [
      {
        path: '/components/pdf',
        name: 'PDF',
        component: Pdf,
        icon: <FilePdfOutlined />
      },
      {
        path: '/components/excel',
        name: 'EXCEL',
        component: Excel,
        icon: <FileExcelOutlined />
      },
      {
        path: '/components/image',
        name: '图片',
        component: Image,
        icon: <FileJpgOutlined />
      },
      {
        path: '/components/richtexteditor',
        name: '富文本编辑',
        component: RichTextEditor,
        icon: <ProjectOutlined />
      }
    ]
  },
  {
    path: '/permission',
    name: '权限',
    component: Permission,
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
        component: NestedRoute,
        icon: <FilePdfOutlined />,
        children: [
          {
            path: '/nestedroute/route_1/route_1_1',
            name: '1-1',
            component: NestedRoute,
            icon: <FilePdfOutlined />,
            children: [
              {
                path: '/nestedroute/route_1/route_1_1/route_1_1_1',
                name: '1-1-1',
                component: NestedRoute,
                icon: <FilePdfOutlined />
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
        children: [
          {
            path: '/nestedroute/route_2/route_2_2',
            name: '2-1',
            component: NestedRoute,
            icon: <FilePdfOutlined />
          }
        ]
      }
    ]
  },
  {
    path: '/echart/:id',
    name: '图表',
    component: Echart,
    icon: <LineChartOutlined />
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    isMenu: false
  },
  {
    path: '/personal',
    name: '个人页面',
    component: Personal,
    isMenu: false
  }
]


