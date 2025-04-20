<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-04 14:29:05
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-18 13:00:11
 * @FilePath: /micro-main-vue3/src/components/CommonHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#202329"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="menu-container"
    >
      <div class="left-section">
        <span class="logo"></span>
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="job">职位</el-menu-item>
        <el-menu-item index="enterprise">企业</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
      </div>
      <div class="right-section">
        <template v-if="isLoggedIn">
          <el-dropdown @command="handleCommand">
            <span class="user-info">
              {{ username }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <el-button
          v-else
          round
          plain
          size="small"
          class="login-btn"
          @click="$router.push('/login')"
        >
          登录
        </el-button>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { logout } from '@/api/loginApi'
import microApp from '@micro-zoe/micro-app'
import { getGlobalData, setGlobalData, clearGlobalData } from '@/utils/globalData'

const router = useRouter()
const route = useRoute()
const activeIndex = ref('home')
const isLoggedIn = ref(false)
const username = ref('')

// 更新登录状态的函数
const updateLoginState = () => {
  const globalData = getGlobalData()
  console.log('获取 globalData:', globalData)

  if (globalData && globalData.token) {
    isLoggedIn.value = true
    username.value = globalData.userInfo?.username || ''
  } else {
    isLoggedIn.value = false
    username.value = ''
  }
}

// 监听 microApp 的 globalData 变化
watch(
  () => microApp.getGlobalData(),
  (newVal) => {
    console.log('globalData 变化:', newVal)
    updateLoginState()
  },
  { immediate: true, deep: true },
)

// 组件挂载时也更新一次状态
onMounted(() => {
  console.log('组件挂载，更新状态')
  updateLoginState()
})

// 根据路由路径设置激活的菜单项
const setActiveIndex = () => {
  const path = route.path
  if (path.includes('childHome')) {
    activeIndex.value = 'home'
  } else if (path.includes('childJob')) {
    activeIndex.value = 'job'
  } else if (path.includes('childEnterprise')) {
    activeIndex.value = 'enterprise'
  } else if (path.includes('childAbout')) {
    activeIndex.value = 'about'
  }
}

// 监听路由变化
watch(
  () => route.path,
  () => {
    setActiveIndex()
  },
)

const handleSelect = (key: string) => {
  switch (key) {
    case 'home':
      router.push({ name: 'childHome' })
      break
    case 'job':
      router.push({ name: 'childJob' })
      break
    case 'enterprise':
      router.push({ name: 'childEnterprise' })
      break
    case 'about':
      router.push({ name: 'childAbout' })
      break
  }
}

const handleCommand = async (command: string) => {
  if (command === 'logout') {
    try {
      const res = await logout()
      if (res.code === 200) {
        // 清除 globalData
        clearGlobalData()
        ElMessage.success('退出成功')
        router.push('/login')
      } else {
        ElMessage.error(res.message || '退出失败')
      }
    } catch (error) {
      console.error('退出失败:', error)
    }
  }
}
</script>

<style scoped lang="scss">
.common-header {
  .menu-container {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    border-bottom: none !important;

    :deep(.el-menu-item) {
      transition: all 0.3s ease;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: #ffd04b !important;
      }
      &.is-active {
        background-color: rgba(255, 255, 255, 0.15) !important;
        border-bottom: 2px solid #ffd04b !important;
      }
    }
  }

  .left-section {
    display: flex;
    align-items: center;
  }

  .right-section {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-left: 15px;
    width: 48px;
    height: 48px;
    background-image: url('@/assets/logo.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: 20px;
  }

  .login-btn {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #202329;
      border-color: #fff;
    }
  }

  .user-info {
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 10px;
    height: 100%;
    &:hover {
      color: #ffd04b;
    }
  }
}
</style>
