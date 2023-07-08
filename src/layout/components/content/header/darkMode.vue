<template>
  <div @click="changeTheme()">
    <Moon class="h-5 w-10" v-if="isDark"></Moon>
    <Sunny class="h-5 w-10" v-else></Sunny>
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { onMounted, unref } from 'vue'
// @ts-ignore
import { useDark, useToggle } from '@vueuse/core'
import { useThemeStore } from '@/stores/theme/index'

const themeStore = useThemeStore()

// 系统是否是暗夜模式
const isDark = useDark()
const toggleDark = useToggle(isDark)

onMounted(() => {
  themeStore.setIsDark(unref(isDark))
})
// 颜色切换
function changeTheme() {
  toggleDark()
  themeStore.setIsDark(unref(isDark))
}
</script>

<style scoped></style>
