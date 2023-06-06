<template>
  <Moon class="h-5 w-10" v-if="true"></Moon>
  <Sunny class="h-5 w-10" v-else></Sunny>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
</script>

<style scoped></style>
