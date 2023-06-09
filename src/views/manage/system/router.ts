import { RouteRecordRaw } from 'vue-router'
const router: RouteRecordRaw[] = [
  {
    path: '/system',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '系统管理',
      icon: 'user',
      permission: 'sys',
      menu: 2, // 具有多个子菜单
    },
    redirect: '/system/users',
    children: [
      {
        path: 'users',
        name: 'sys-users',
        meta: { title: '用户管理', icon: 'home', permission: 'sys-users' },
        component: () => import('./users/index.vue'),
      },
      {
        path: 'roles',
        name: 'sys-roles',
        meta: { title: '角色管理', icon: 'home', permission: 'sys-roles' },
        component: () => import('./roles/index.vue'),
      },
      {
        path: 'permissions',
        name: 'sys-permissions',
        meta: {
          title: '权限管理',
          icon: 'home',
          permission: 'sys-permissions',
        },
        component: () => import('./permissions/index.vue'),
      },
      {
        path: 'departments',
        name: 'sys-departments',
        meta: {
          title: '部门管理',
          icon: 'home',
          permission: 'sys-departments',
        },
        component: () => import('./departments/index.vue'),
      },
    ],
  },
]

export default router
