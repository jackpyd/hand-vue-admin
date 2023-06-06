/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RouteRecordRaw } from 'vue-router'

export function getModuleRoutes() {
  const modules = import.meta.glob('@/views/**/router.ts', {
    eager: true,
  })
  let moduleRoutes: RouteRecordRaw[] = []

  Object.keys(modules).forEach((routePath) => {
    console.log(routePath)
    // @ts-expect-error
    if (modules[routePath].default !== undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      moduleRoutes = moduleRoutes.concat(modules[routePath].default)
    }
  })

  return moduleRoutes
}

export function getModuleViewComponents() {
  return import.meta.glob(['@/views/**/index.vue'])
}
