<template>
  <el-menu :default-active="route.path" :collapse="!appStore.isExpand" router>
    <template v-for="menu in menusList" :key="menu">
      <el-menu-item v-if="menu.meta.menu == 1" :index="menu.path">
        <el-icon>
          <Icon :name="menu?.meta?.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-if="menu.meta.menu == 2" :index="menu.path">
        <template #title>
          <el-icon><Icon :name="menu?.meta?.icon" /></el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <template v-for="subMenu in menu.children" :key="subMenu">
          <el-menu-item :index="menu.path + '/' + subMenu.path">
            {{ subMenu.meta.title }}
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import Icon from '@/components/SvgIcon/ElIcon.vue'
import useAppStore from '@/stores/app'
import useUserStore from '@/stores/user'
import router from '@/router'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'

// 获取当前路由路径
const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()

const routesList = router.getRoutes()
const menusList = ref()
watch(
  () => {
    return userStore.isLogin
  },
  (now) => {
    // 登录之后发送请求
    if (now) {
      const permissions = userStore.permissions
      console.log(permissions)
      // 挂载的时候，从权限管理的store中获取对应的权限列表，并根据权限列表生成对应的菜单栏
      let tempMenus: any[] = []
      // 更新数据
      routesList.forEach((route) => {
        let tempMenu: any
        const menuType = route.meta.menu
        if (menuType == 1 || menuType == 2) {
          if (route.meta.permission) {
            tempMenu = {
              ...route,
            }
            tempMenu.children = []
            route.children.forEach((subRoute: any) => {
              console.log(subRoute.meta)
              if (
                subRoute.meta.permission &&
                permissions.indexOf(subRoute.meta.permission) != -1
              ) {
                tempMenu.children.push(subRoute)
              } else if (!subRoute.meta.permission) {
                tempMenu.children.push(subRoute)
              }
            })
          } else {
            tempMenu = route
          }

          tempMenus.push(tempMenu)
        }
      })
      menusList.value = tempMenus
    }
  },
)
</script>

<style scoped></style>
