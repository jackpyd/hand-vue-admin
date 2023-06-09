import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
// 引入 Element Plus 默认样式文件
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import gloablComponent from '@/components'
// 导入路由插件
import router from '@/router'
// 导入pinia插件
import pinia from '@/stores'

const app = createApp(App)
// 修改默认语言为中文
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装自动注册全局组件的插件
app.use(gloablComponent)
// 安装路由插件
app.use(router)
// 安装pinia插件
app.use(pinia)

// 自定义权限指令
app.mount('#app')
