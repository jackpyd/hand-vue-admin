<template>
  <div class="bg-gray-50 h-screen flex items-center justify-center">
    <div class="flex w-full sm:w-[32rem] shadow bg-white lg:rounded-lg">
      <div class="w-full mx-auto pt-6 pb-6 pl-4 pr-4">
        <div class="flex"></div>
        <div class="w-full text-center text-2xl mt-6 mb-8 text-blue-500">
          Hi, 欢迎使用~
        </div>
        <el-divider>登录</el-divider>
        <div>
          <el-form
            v-model="userLoginForm"
            class="w-11/12 sm:w-4/5 pt-2 space-y-8 mx-auto"
          >
            <el-form-item>
              <el-input
                v-model="userLoginForm.username"
                placeholder="账号"
                class="h-12 text-base"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="userLoginForm.password"
                placeholder="密码"
                class="h-12 text-base"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="flex justify-between w-11/12 sm:w-4/5 mx-auto mt-3">
          <!-- 功能区：记住账号密码、忘记密码 -->
          <el-checkbox>记住密码</el-checkbox>
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
          Hand-Vue-Admin @copyright 2018-{{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import useUserStore from '@/stores/user'
const userStore = useUserStore()

const userLoginForm = reactive({
  username: '',
  password: '',
})

function login() {
  console.log(userLoginForm)
  userStore.login(userLoginForm.username, userLoginForm.password)
}

userStore.checkLogin()
</script>

<style scoped></style>
