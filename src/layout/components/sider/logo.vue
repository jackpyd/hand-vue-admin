<template>
  <div class="h-16 flex items-center justify-center container">
    <svg class="h-9 w-9">
      <use xlink:href="#icon-dog" fill="#409eff" color="#409eff"></use>
    </svg>
    <!-- todo: 添加动画，在宽度变化完成时，再执行显示系统名称的动画 -->
    <span class="text-sm pl-3 text-gray-500" v-show="appStore.isExpand">
      Hand-Vue-Admin
    </span>
  </div>
</template>

<script setup lang="ts">
import useAppStore from '@/stores/app'

const appStore = useAppStore()
</script>

<style scoped></style>
