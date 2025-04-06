/*
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-03 17:03:48
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-06 16:31:47
 * @FilePath: /micro-main-vue3/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import UserLogin from '@/views/main/UserLogin.vue'
import microApp from '@micro-zoe/micro-app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/main/childHome',
    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
    {
      path: '/login',
      name: 'login',
      component: UserLogin,
      meta: {
        title: '登录',
        keepAlive: false,
        requireAuth: false,
      },
    },
    {
      path: '/main/childHome',
      name: 'childHome',
      component: () => import('@/views/child/ChildHome.vue'),
      meta: {
        title: '首页',
        keepAlive: true,
        requireAuth: true,
      },
    },
    {
      path: '/main/childJob',
      name: 'childJob',
      component: () => import('@/views/child/ChildJob.vue'),
      meta: {
        title: '职位',
        keepAlive: true,
        requireAuth: true,
      },
    },
    {
      path: '/main/childEnterprise',
      name: 'childEnterprise',
      component: () => import('@/views/child/ChildEnterprise.vue'),
      meta: {
        title: '企业',
        keepAlive: true,
        requireAuth: true,
      },
    },
    {
      path: '/main/childAbout',
      name: 'childAbout',
      component: () => import('@/views/child/ChildAbout.vue'),
      meta: {
        title: '关于',
        keepAlive: true,
        requireAuth: true,
      },
    },
  ],
})

// 白名单路由
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 优先从 localStorage 获取数据
  const storedData = localStorage.getItem('user')
  const globalData = storedData
    ? JSON.parse(storedData)
    : (microApp.getGlobalData() as Record<string, any>)
  const token = globalData?.token

  // 设置页面标题
  document.title = to.meta.title ? `${to.meta.title} - DOSS直聘` : 'DOSS直聘'

  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
