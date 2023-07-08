<template>
  <span ref="text"></span>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import TypeIt from 'typeit'

interface Props {
  speed: number
  strings: string[]
  string: string
  cursor: boolean
  loop: boolean
}

// todo: 类型无法被解构识别，获取时为unkown
const props = defineProps({
  speed: {
    type: Number,
    default: 200,
  },
  strings: {
    type: Array,
    defalut: [],
  },
  string: {
    type: String,
    defalut: '',
  },
  cursor: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
})

const text = ref()

onMounted(() => {
  new TypeIt(text.value, {
    strings: (props.strings as string[]) || [props.string as string],
    speed: 100,
    lifeLike: true, // 使打字速度不规则
    cursor: props.cursor, //在字符串末尾显示闪烁的光标
    breakLines: false, // 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
    loop: props.loop, //是否循环
  }).go()
})
</script>
