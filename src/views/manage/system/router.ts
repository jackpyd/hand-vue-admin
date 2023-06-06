import { RouteRecordRaw } from 'vue-router'
const router: RouteRecordRaw[] = [
  {
    path: '/system',
    component: () => import('@/layout/index.vue'),
    meta: { title: '系统管理', icon: 'user' },
    redirect: '/system/users',
    children: [
      {
        path: 'users',
        name: 'sys-users',
        meta: { title: '用户管理', icon: 'home' },
        component: () => import('./users/index.vue'),
      },
      {
        path: 'roles',
        name: 'sys-role',
        meta: { title: '角色管理', icon: 'home' },
        component: () => import('./roles/index.vue'),
      },
      {
        path: 'permissions',
        name: 'sys-permissions',
        meta: { title: '权限管理', icon: 'home' },
        component: () => import('./permissions/index.vue'),
      },
      {
        path: 'departments',
        name: 'sys-departments',
        meta: { title: '部门管理', icon: 'home' },
        component: () => import('./departments/index.vue'),
      },
    ],
  },
]

export default router
