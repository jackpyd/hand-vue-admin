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
    children: [
      {
        path: '',
        name: 'Dashboard',
        meta: { title: '概览', icon: 'home', hidden: false },
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard', // 把根路径重定向到 dashboard
    children: [
      {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/views/404/index.vue'),
      },
    ],
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
].concat(moduleRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoutes,
  // 路由滚动
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
})

export default router
