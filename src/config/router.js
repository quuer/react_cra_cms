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
import NestedRoute from '../pages/NestedRoute'
import Detail from '../pages/Excel/Detail'

// siderHidden: true, 不在左侧菜单栏显示
// siderChildrenHidden: true， 其下的children不在左侧菜单栏显示
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
        index: '/components/excel/list',
        siderChildrenHidden: true,
        meta: {
          title: 'EXCEL',
          icon: <FileExcelOutlined />
        },
        children: [
          {
            path: '/components/excel/list',
            component: lazy(() => import('../pages/Excel/List')),
            meta: {
              title: '用户列表'
            }
          },
          {
            path: '/components/excel/detail/:id',
            component: Detail,
            meta: {
              title: '用户详情'
            }
          },
          {
            path: '/components/excel/edit/:id',
            component: lazy(() => import('../pages/Excel/Edit')),
            meta: {
              title: '编辑用户'
            }
          }
        ]
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
    red: '/nestedroute/route1/route1-1',
    meta: {
      title: '嵌套路由',
      icon: <ClusterOutlined />
    },
    children: [
      {
        path: '/nestedroute/route1',
        component: lazy(() => import('../pages/NestedRoute/Route1')),
        meta: {
          title: '菜单1'
        },
        children: [
          {
            path: '/nestedroute/route1/route1-1',
            component: lazy(() => import('../pages/NestedRoute/Route1/Route1-1')),
            meta: {
              title: '菜单1-1'
            }
          },
          {
            path: '/nestedroute/route1/route1-2',
            component: lazy(() => import('../pages/NestedRoute/Route1/Route1-2')),
            meta: {
              title: '菜单1-2'
            },
            children: [
              {
                path: '/nestedroute/route1/route1-2/route1-2-1',
                component: lazy(() => import('../pages/NestedRoute/Route1/Route1-2/Route1-2-1')),
                meta: {
                  title: '菜单1-2-1'
                }
              },
              {
                path: '/nestedroute/route1/route1-2/route1-2-2',
                component: lazy(() => import('../pages/NestedRoute/Route1/Route1-2/Route1-2-2')),
                meta: {
                  title: '菜单1-2-2'
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
  // {
  //   path: '/404',
  //   component: NotFound,
  //   siderHidden: true,
  //   meta: {
  //     title: '未找到页面'
  //   }
  // },
  {
    path: '/personal',
    component: lazy(() => import('../pages/Personal')),
    siderHidden: true,
    meta: {
      title: '个人页面',
      icon: <LineChartOutlined />
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    siderHidden: true,
    meta: {}
  },
  {
    path: '*',
    redirect: '/404',
    siderHidden: true,
    meta: {
      title: '未找到页面'
    }
  }
]

