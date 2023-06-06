<template>
  <div
    @click="appStore.changeExpaned()"
    class="h-full w-8 ml-2 hover:cursor-pointer"
  >
    <Expand class="w-6 h-8" v-if="!appStore.isExpand"></Expand>
    <Fold class="w-6 h-8" v-else></Fold>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import useAppStore from '@/stores/app'

const appStore = useAppStore()
</script>

<style scoped></style>
