import React, { Suspense, lazy } from 'react'
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
import { Navigate } from 'react-router'
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
  // {
  //   path: '/components',
  //   redirect: '/components/pdf',
  //   meta: {
  //     isMenu: false
  //   }
  // },
  {
    path: '/components',
    component: Component,
    // redirect: '/components/pdf',
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
    // redirect: '/nestedroute/route1/route2/route3',
    meta: {
      title: '嵌套路由',
      icon: <ClusterOutlined />
    },
    children: [
      {
        path: '/nestedroute/route1',
        component: NestedRouteOne,
        meta: {
          title: '菜单1',
          icon: <FilePdfOutlined />
        },
        children: [
          {
            path: '/nestedroute/route1/route2',
            component: NestedRouteTwo,
            meta: {
              title: '菜单2',
              icon: <FilePdfOutlined />
            },
            children: [
              {
                path: '/nestedroute/route1/route2/route3',
                component: lazy(() => import('../pages/NestedRouteThree')),
                meta: {
                  title: '菜单3',
                  icon: <FilePdfOutlined />
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
    path: '*',
    redirect: '/404',
    meta: {
      title: '未找到页面',
      isMenu: false
    }
  }]

export const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title
  }
  // 判断未登录跳转登录页
  // if (meta.needLogin) {
  //   if (!isLogin) {
  //     return '/login'
  //   }
  // }
}

/**
 * @description 将自定义路由配置转为react-router v6 版本useRoutes要求的格式
 * @params 自定义配置路由表
 */
export const transformRoutes = (routes) => {
  const list = []
  routes.forEach(route => {
    const obj = { ...route }
    if (obj.path === undefined) {
      return
    }
    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} replace={true} />
    }
    if (obj.component) {
      obj.element = <obj.component meta={obj.meta} />
    }
    delete obj.redirect
    delete obj.component
    delete obj.meta
    if (obj.children) {
      obj.children = transformRoutes(obj.children)
    }
    list.push(obj)
  })
  return list
}
