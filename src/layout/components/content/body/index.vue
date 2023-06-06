<template>
  <div
    class="p-1 sm:p-3 max-w-full h-screen overflow-auto sm:overflow-x-hidden"
  >
    <div class="min-h-[calc(100vh-8rem)]">
      <router-view></router-view>
    </div>
    <div class="w-full text-center text-gray-400 h-4 leading-10"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
