/*
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-03 17:03:48
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-11 11:03:07
 * @FilePath: /micro-main-vue3/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'normalize.css/normalize.css'
import './assets/reset.css'
import './assets/main.css'
import 'element-plus/theme-chalk/src/index.scss'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import microApp from '@micro-zoe/micro-app'

import App from './App.vue'
import router from './router'

// 定义数据类型
interface MicroAppData {
  path?: string
  from?: string
}

// 初始化 micro-app
microApp.start({
  plugins: {
    // modules: {
    //   'child-app': [
    //     {
    //       loader(code: string) {
    //         if (import.meta.env.DEV) {
    //           // 处理 Nuxt 的资源路径
    //           code = code.replace(
    //             /(from|import)(\s*['"])(\/\_nuxt\/)/g,
    //             `$1$2http://localhost:3000/_nuxt/`,
    //           )
    //         }
    //         return code
    //       },
    //     },
    //   ],
    // },
  },
})

// 全局数据通信
microApp.setGlobalData({
  token: 'fixed-token-xyz-123456',
  isMicroApp: true,
  mainAppPath: '/main/childHome',
})

// 监听子应用消息
microApp.addDataListener('child-app', (data: MicroAppData) => {
  console.log('收到子应用数据:', data)
  if (data.path && data.from === 'child-app') {
    // 子应用内部路由变化时，不影响主应用路由
    console.log('子应用路由变化:', data.path)
  }
})

const app = createApp(App)

// 配置自定义元素
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('micro-app')

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
