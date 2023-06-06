<template>
  <div :class="siderStyle">
    <logo></logo>
    <my-menu></my-menu>
  </div>
</template>

<script setup lang="ts">
import logo from './logo.vue'
import MyMenu from './menu.vue' // 和menu标签冲突
import useAppStore from '@/stores/app'
import { watch, ref } from 'vue'
const appStore = useAppStore()

const siderStyle = ref('')
const baseSiderStyle =
  ' h-screen z-[1000] sm:z-0 absolute top-0 left-0 sm:fixed transition-width duration-300 ease-linear sider-bg overflow-auto'
// 监视属性监听expand属性的变化
watch(
  () => {
    return appStore.isExpand
  },
  () => {
    console.log(appStore.isExpand)
    if (appStore.isExpand) {
      siderStyle.value = 'w-56' + baseSiderStyle
    } else {
      siderStyle.value = 'w-16' + baseSiderStyle
    }
  },
  {
    immediate: true,
  },
)
</script>

<style scoped></style>
