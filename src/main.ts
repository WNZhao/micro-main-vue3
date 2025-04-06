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

microApp.start() // start micro-app
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
