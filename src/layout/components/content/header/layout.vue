<template>
  <div @click="openSetting()">
    <Setting class="h-5 w-10"></Setting>
  </div>
</template>

<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue'
import { emitter } from '@/utils/mitt'
// 打开侧边栏，选择主题配色
function openSetting() {
  // @ts-ignore
  emitter.emit('openPanel')
}
</script>

<style scoped></style>
