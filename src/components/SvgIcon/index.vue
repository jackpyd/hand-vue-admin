<template>
  <svg>
    <use :xlink:href="prefix + name" :fill="fill"></use>
  </svg>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore()
const dark: string = '#ffff'
const light: string = '#000000'

const props = defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  //svg矢量图的名字
  name: String,
  //svg图标的颜色
  color: {
    type: String,
    default: '',
  },
  // //svg宽度
  // width: {
  //   type: String,
  //   default: '16px',
  // },
  // //svg高度
  // height: {
  //   type: String,
  //   default: '16px',
  // },
})

// 自适应暗夜模式
const fill = computed(() => {
  if (props.color) {
    return props.color
  }
  return themeStore.getIsDark ? dark : light
})
</script>
