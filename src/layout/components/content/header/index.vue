<template>
  <!-- 两端对齐 居中 -->
  <div
    class="bg-white flex items-center justify-between h-16 w-full drop-shadow-md border-l dark:border-l-0 border-gray-200"
  >
    <div class="flex flex-row min-w-[17rem]">
      <!-- 控制侧边菜单栏的开关-->
      <expand-button></expand-button>
      <!-- 路由路径 -->
      <Breadcrumbs class="w-96 flex items-center pl-3 sm:pl-0"></Breadcrumbs>
    </div>

    <div class="flex items-center w-52 sm:min-w-[18rem] pl-1 justify-end mr-4">
      <div class="h-10 w-3/5 flex space-between items-center">
        <!-- 搜索 -->
        <my-search class="hover:cursor-pointer"></my-search>
        <my-lang class="hover:cursor-pointer"></my-lang>
        <my-theme class="hover:cursor-pointer"></my-theme>
        <my-notification class="hover:cursor-pointer"></my-notification>
        <!-- <div class="h-8 w-8 bg-slate-400"></div>
          <div class="h-8 w-8 bg-slate-400"></div>
          <div class="h-8 w-8 bg-slate-400"></div>
          <div class="h-8 w-8 bg-slate-400"></div> -->
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
import MyTheme from './theme.vue'
import MyNotification from './notification.vue'
import MyProfile from './profile.vue'
</script>

<style scoped></style>
