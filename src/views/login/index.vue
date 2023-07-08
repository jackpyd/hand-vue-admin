<template>
  <div
    class="dark:bg-gray-800 shadow-md bg-gray-50 h-screen flex items-center justify-center"
  >
    <div
      class="flex w-full sm:w-[32rem] shadow dark:bg-gray-900 bg-white lg:rounded-lg"
    >
      <div class="w-full mx-auto pt-6 pb-6 pl-4 pr-4">
        <div class="flex items-center justify-center">
          <svg class="h-9 w-9">
            <use xlink:href="#icon-dog" fill="#409eff" color="#409eff"></use>
          </svg>
        </div>
        <div class="w-full text-center text-2xl mt-6 mb-8 text-blue-500">
          <MyTypeit string="Hi, 欢迎使用~" />
        </div>

        <div
          class="relative h-1 mt-8 mb-8 w-full border-solid border-t-slate-200 border-t"
        >
          <div
            class="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-white dark:bg-gray-900 text-gray dark:text-gray-300"
          >
            登录
          </div>
        </div>
        <div>
          <el-form
            ref="loginForm"
            :rules="loginFormRules"
            :model="userLoginFormParams"
            class="w-11/12 sm:w-4/5 pt-2 space-y-8 mx-auto"
          >
            <el-form-item prop="username">
              <el-input
                v-model="userLoginFormParams.username"
                placeholder="账号"
                :prefix-icon="User"
                class="h-12 text-base"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="userLoginFormParams.password"
                type="password"
                placeholder="密码"
                class="h-12 text-base"
                :prefix-icon="Lock"
                show-password
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="flex justify-between w-11/12 sm:w-4/5 mx-auto mt-3">
          <!-- 功能区：记住账号密码、忘记密码 -->
          <el-checkbox v-model="isRemenberPassword">记住密码</el-checkbox>
          <div class="text-sm text-blue-500 cursor-pointer">忘记密码？</div>
        </div>
        <div class="w-11/12 sm:w-4/5 mx-auto mt-5">
          <!-- 登录按钮 -->
          <el-button @click="login" type="primary" class="w-full text-xl">
            登录
          </el-button>
        </div>
        <!--系统信息简介 -->
        <div
          class="w-11/12 sm:w-4/5 mx-auto mt-5 text-center text-gray-500 pt-2"
        >
          {{ appName }} @copyright 2018-{{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import { useLogin } from './login'
import MyTypeit from '@/components/MyTypeit/index.vue'

const {
  userLoginFormParams,
  loginForm,
  loginFormRules,
  isRemenberPassword,
  checkLogin,
  login,
} = useLogin()

const appName = import.meta.env.VITE_APP_NAME

onMounted(() => {
  // 检查是否登录
  checkLogin()
})
</script>

<style scoped></style>
