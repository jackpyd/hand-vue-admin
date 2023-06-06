<template>
  <div :class="contentStyle">
    <MyHeader></MyHeader>
    <MyBody></MyBody>
  </div>
</template>

<script setup lang="ts">
import MyHeader from './header/index.vue'
import MyBody from './body/index.vue'

import useAppStore from '@/stores/app'
import { watch, ref } from 'vue'
const appStore = useAppStore()

const baseContentStyle =
  ' w-full h-screen transition-spacing duration-300 ease-linear overflow-hidden'
const contentStyle = ref('')

// 监视属性监听expand属性的变化
watch(
  () => {
    return appStore.isExpand
  },
  () => {
    console.log(appStore.isExpand)
    if (appStore.isExpand) {
      contentStyle.value = 'ml-56' + baseContentStyle
    } else {
      contentStyle.value = 'ml-16' + baseContentStyle
    }
    console.log(contentStyle.value)
  },
  {
    immediate: true,
  },
)
</script>

<style scoped></style>
