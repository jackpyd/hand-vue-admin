<template>
  <div class="right-panel-container" :class="{ show: show }">
    <div
      class="right-panel bg-white text-gray dark:text-gray-200 dark:bg-gray-900 p-5"
    >
      <!--  -->
      <div class="flex items-center justify-between">
        <h4>主题设置</h4>
        <div>
          <Close @click="show = false" class="w-5 h-5"></Close>
        </div>
      </div>
      <div class="mt-3 border-b border-solid border-b-slate-200"></div>
      <div class="mt-5 flex flex-col items-center justify-between">
        <h4>开启夜间模式</h4>
        <el-switch
          v-model="isDarkTheme"
          inline-prompt
          class="mt-5 mb-5"
          :active-icon="Moon"
          :inactive-icon="Sunny"
        />
      </div>
      <div class="mt-5 flex flex-col items-center justify-between">
        <h4>导航栏模式</h4>
        <div class="mt-5"></div>
      </div>
      <div class="flex flex-col items-center justify-between">
        <h4>主题色</h4>
        <div>
          <ul class=""></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Close, Moon, Sunny } from '@element-plus/icons-vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { emitter } from '@/utils/mitt'

const show = ref(false)

onMounted(() => {
  emitter.on('openPanel', () => {
    show.value = true
  })
})

onUnmounted(() => {
  // 避免多次触发
  emitter.off('openPanel')
})

const isDarkTheme = ref(true)
</script>

<style scoped lang="scss">
.right-panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 40000;
  width: 100%;
  max-width: 315px;
  height: 100vh;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 5%);
  transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(100%);
}

.show {
  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);

  .right-panel-background {
    z-index: 20000;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .right-panel {
    transform: translate(0);
  }
}
</style>
