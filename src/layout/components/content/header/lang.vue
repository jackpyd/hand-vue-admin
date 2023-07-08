<template>
  <div>
    <SvgIcon class="h-5 w-10" :color="bgColor" name="lang"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme/index'
import { computed } from 'vue'

const themeStore = useThemeStore()
const dark: string = '#ffff'
const light: string = '#000000'
const bgColor = computed(() => {
  console.log(themeStore.getIsDark ? dark : light)
  return themeStore.getIsDark ? dark : light
})
</script>

<style scoped></style>
