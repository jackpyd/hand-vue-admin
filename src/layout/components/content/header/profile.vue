<template>
  <div class="flex w-2/5 hover:cursor-pointer pl-1 pr-1">
    <el-dropdown
      size="large"
      placement="bottom-end"
      class="flex items-center justify-center hover:cursor-pointer w-full"
    >
      <div class="flex lg:items-center">
        <img :src="userInfo.avatar" class="w-7 h-7 rounded-full" />
        <div class="ml-2 hidden lg:block">{{ userInfo.username }}</div>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="w-28">
          <el-dropdown-item>
            <User></User>
            <router-link :to="{ path: '/users/center' }">个人信息</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided @click="logout">
            <SwitchButton></SwitchButton>
            <!-- <Icon name="power" className="mr-1 w-4 h-4" /> -->
            <span>退出系统</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { User, SwitchButton } from '@element-plus/icons-vue'

import { reactive } from 'vue'
import useUserStore from '@/stores/user'

const userStore = useUserStore()
const userInfo = reactive({
  username: '',
  avatar: '',
})

const logout = () => {
  ElMessageBox.confirm('确定退出系统吗?', '请确认', {
    distinguishCancelAndClose: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
  }).then(() => {
    userStore.logout()
  })
}

userStore.getUserInfo().then(() => {
  userInfo.username = userStore.username
  userInfo.avatar = userStore.avatar
})
</script>

<style lang="scss" scoped></style>
