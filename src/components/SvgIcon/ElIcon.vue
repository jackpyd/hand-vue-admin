<template>
  <component :is="icon" :class="className" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
    default: 'w-5 h-5',
  },
})

const icon = computed(() => {
  let name = ''
  props.name.split('-').forEach((v) => {
    name += v[0].toUpperCase() + v.substr(1)
  })
  //@ts-expect-error
  return ElementPlusIconsVue[name]
})
</script>
