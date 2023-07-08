import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getModuleRoutes, getModuleViewComponents } from './autoRouter'
const moduleRoutes: RouteRecordRaw[] = getModuleRoutes()
getModuleViewComponents()
// 默认路由(静态路由)
const defaultRoutes: RouteRecordRaw[] = [
  // 概览界面
  {
    path: '/dashboard',
    component: () => import('@/layout/index.vue'),
    meta: {
      menu: 1, // 只有一个菜单
      title: '概览',
      icon: 'HomeFilled',
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '/',
    redirect: '/dashboard', // 把根路径重定向到 dashboard
  },
  // 404没有找到
  {
    path: '/404',
    name: '404',
    meta: { title: '404', menu: 0 },
    component: () => import('@/views/404/index.vue'),
  },
  // 登录界面
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/index.vue'),
  },
  // todo:暂时不清楚为何报错
].concat(moduleRoutes as any)

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoutes,
  // 路由滚动
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
})

export default router
