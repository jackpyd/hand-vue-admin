<template>
  <div class="h-16 flex items-center justify-center container">
    <SvgIcon name="logo" class="h-9 w-9"></SvgIcon>
    <!-- todo: 添加动画，在宽度变化完成时，再执行显示系统名称的动画 -->
    <span class="text-sm pl-3" v-show="appStore.isExpand">{{ appName }}</span>
  </div>
</template>

<script setup lang="ts">
import useAppStore from '@/stores/app'
const appName = import.meta.env.VITE_APP_NAME
const appStore = useAppStore()
</script>

<style scoped></style>
