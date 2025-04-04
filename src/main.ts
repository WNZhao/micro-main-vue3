import 'normalize.css/normalize.css'
import './assets/reset.css'
import './assets/main.css'
import 'element-plus/theme-chalk/src/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import microApp from '@micro-zoe/micro-app'

import App from './App.vue'
import router from './router'

microApp.start() // start micro-app
const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, { size: 'small' }) // set element-plus default size
app.use(router)

app.mount('#app')
