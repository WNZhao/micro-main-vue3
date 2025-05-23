/*
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-03 17:03:48
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-10 18:08:16
 * @FilePath: /micro-main-vue3/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/main/UserLogin.vue'),
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
  const userStore = useUserStore()

  // 处理子应用路由
  if (to.path.startsWith('/child-home')) {
    // 保持在主应用的 /main/childHome 路由下
    next('/main/childHome')
    return
  }

  // 处理主应用的认证
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
