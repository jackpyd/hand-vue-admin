import { defineStore } from 'pinia'
import request from '@/utils/request'
import router from '@/router'
import { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      // 登录所需的token
      token: '',
      username: '',
      avatar: '',
      permissions: [] as string[],
      roles: [] as string[],
      isLogin: false,
    }
  },
  getters: {
    getPermission(): string[] {
      return this.permissions
    },
  },
  actions: {
    // 退出登录
    async logout() {
      this.isLogin = false
      this.token = ''
      await localStorage.clear()
      router.push('login')
    },
    // 登录
    async login(username: string, password: string) {
      request({
        url: '/api/user/login',
        method: 'POST',
        data: {
          username,
          password,
        },
      }).then((response: AxiosResponse<any, any>) => {
        // 获取token
        const token = response.data.token
        if (token) {
          // 写入本地缓存
          this.storeToken(token)
          this.setToken(token)
          router.push('/')
        } else {
          ElMessage.error('用户名或密码错误')
        }
      })
    },

    // 检查是否登录
    async checkLogin() {
      const token = await localStorage.getItem('token')
      // 如果有token就跳转到首页，根据首页的请求状态码判断是否登录成功
      let flag = true
      if (token) {
        router.push('/')
      } else {
        flag = false
      }
      return flag
    },

    storeToken(token: string) {
      // 同步方法，但是浏览器在将数据写入本地存储时可能会异步执行
      localStorage.setItem('token', token)
    },
    setToken(token: string) {
      this.token = token
    },

    setUsername(username: string) {
      this.username = username
    },
    setPermissions(permissions: string[]) {
      this.permissions = permissions
    },
    setAvatar(avatar: string) {
      this.avatar = avatar
    },

    // 登录之后，获取用户信息
    async getUserInfo() {
      if (!this.token) {
        const token = await localStorage.getItem('token')
        if (!token) {
          // 退回到登录页面
          router.push('login')
          return
        } else {
          this.token = token
        }
      }

      await request({
        url: '/api/user/info',
        headers: {
          token: this.token,
        },
      }).then(
        (response: any) => {
          const responseData = response.data.checkUser
          const avatar = responseData.avatar
          const permissions = responseData.permissions
          const username = responseData.username

          this.setAvatar(avatar)
          this.setPermissions(permissions)
          this.setUsername(username)
          this.isLogin = true
        },
        (error: any) => {
          this.token = ''
          localStorage.clear()
          router.push('login')
          return error
        },
      )
    },
  },
})

export default useUserStore
