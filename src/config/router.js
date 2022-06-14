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
import Component from '../pages/Components'
import NotFound from '../pages/NotFound'
import NestedRoute from '../pages/NestedRoute'
import NestedRouteTwo from '../pages/NestedRouteTwo'
import NestedRouteOne from '../pages/NestedRouteOne'

export const routes = [

  {
    path: '/dashboard',
    component: lazy(() => import('../pages/DashBoard')),
    meta: {
      title: '首页',
      icon: <DashboardOutlined />
    }
  },
  {
    path: '/components',
    component: Component,
    meta: {
      title: '组件',
      icon: <AppstoreAddOutlined />
    },
    children: [
      {
        path: '/components/pdf',
        component: lazy(() => import('../pages/Pdf')),
        meta: {
          title: 'PDF',
          icon: <FilePdfOutlined />
        }
      },
      {
        path: '/components/excel',
        component: lazy(() => import('../pages/Excel')),
        meta: {
          title: 'EXCEL',
          icon: <FileExcelOutlined />
        }
      },
      {
        path: '/components/image',
        component: lazy(() => import('../pages/Image')),
        meta: {
          title: '图片',
          icon: <FileJpgOutlined />
        }
      },
      {
        path: '/components/richtexteditor',
        component: lazy(() => import('../pages/RichTextEditor')),
        meta: {
          title: '富文本编辑器',
          icon: <ProjectOutlined />
        }
      }
    ]
  },
  {
    path: '/permission',
    component: lazy(() => import('../pages/Permission')),
    meta: {
      title: '权限',
      icon: <TeamOutlined />
    }
  },
  {
    path: '/nestedroute',
    component: NestedRoute,
    meta: {
      title: '嵌套路由',
      icon: <ClusterOutlined />
    },
    children: [
      {
        path: '/nestedroute/route1',
        component: NestedRouteOne,
        meta: {
          title: '菜单1'
        },
        children: [
          {
            path: '/nestedroute/route1/route2',
            component: NestedRouteTwo,
            meta: {
              title: '菜单2'
            },
            children: [
              {
                path: '/nestedroute/route1/route2/route3',
                component: lazy(() => import('../pages/NestedRouteThree')),
                meta: {
                  title: '菜单3'
                }
              }
            ]
          }]
      }]
  },
  {
    path: '/echart',
    component: lazy(() => import('../pages/Echart')),
    meta: {
      title: '图表',
      icon: <LineChartOutlined />,
      role: ['admin', 'normal']
    }
  },
  {
    path: '/404',
    component: NotFound,
    isMenu: false,
    meta: {
      title: '未找到页面',
      isMenu: false
    }
  },
  {
    path: '/personal',
    component: lazy(() => import('../pages/Personal')),
    meta: {
      title: '个人页面',
      icon: <LineChartOutlined />,
      isMenu: false
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      isMenu: false
    }
  },
  {
    path: '*',
    redirect: '/404',
    meta: {
      title: '未找到页面',
      isMenu: false
    }
  }
]

