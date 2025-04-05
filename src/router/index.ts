/*
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-03 17:03:48
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-05 16:10:40
 * @FilePath: /micro-main-vue3/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

import UserLogin from '@/views/main/UserLogin.vue'

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
    },
    {
      path: '/main/childJob',
      name: 'childJob',
      component: () => import('@/views/child/ChildJob.vue'),
    },
    {
      path: '/main/childEnterprise',
      name: 'childEnterprise',
      component: () => import('@/views/child/ChildEnterprise.vue'),
    },
    {
      path: '/main/childAbout',
      name: 'childAbout',
      component: () => import('@/views/child/ChildAbout.vue'),
    },
  ],
})

export default router
