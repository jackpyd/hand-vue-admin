<template>
  <div
    :class="appStore.isExpand ? 'w-56' : 'w-16'"
    class="drop-shadow-md dark:bg-slate-800 bg-gray-100 h-screen z-[1000] sm:z-0 absolute top-0 left-0 sm:fixed transition-width duration-300 ease-linear sider-bg overflow-auto"
  >
    <logo></logo>
    <my-menu></my-menu>
  </div>
</template>

<script setup lang="ts">
import logo from './logo.vue'
import MyMenu from './menu.vue' // 和menu标签冲突
import useAppStore from '@/stores/app'

const appStore = useAppStore()
</script>

<style scoped>
/* 去除自带样式 */
.el-menu {
  border-right: none;
}
</style>
