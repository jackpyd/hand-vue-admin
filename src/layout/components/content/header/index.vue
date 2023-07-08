<template>
  <!-- 两端对齐 居中 -->
  <div
    class="dark:bg-slate-800 bg-gray-100 flex items-center justify-between h-16 w-full drop-shadow-md border-l dark:border-l-0 border-gray-200"
  >
    <div class="flex flex-row min-w-[17rem]">
      <!-- 控制侧边菜单栏的开关-->
      <expand-button></expand-button>
      <!-- 路由路径 -->
      <Breadcrumbs class="w-96 flex items-center pl-3 sm:pl-0"></Breadcrumbs>
    </div>

    <div class="flex items-center w-72 sm:min-w-[18rem] pl-1 justify-end mr-4">
      <div class="h-10 w-4/5 flex space-between items-center">
        <!-- 搜索 -->
        <my-notification class="hover:cursor-pointer"></my-notification>
        <my-search class="hover:cursor-pointer"></my-search>
        <my-lang class="hover:cursor-pointer"></my-lang>
        <my-dark-mode class="hover:cursor-pointer"></my-dark-mode>
        <my-layout class="hover:cursor-pointer"></my-layout>
      </div>
      <my-profile></my-profile>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpandButton from './expandButton.vue'
import Breadcrumbs from './breadcrumbs.vue'
import MySearch from './search.vue'
import MyLang from './lang.vue'
import MyDarkMode from './darkMode.vue'
import MyLayout from './layout.vue'
import MyNotification from './notification.vue'
import MyProfile from './profile.vue'
</script>

<style scoped></style>
