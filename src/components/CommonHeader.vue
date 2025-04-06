<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-04 14:29:05
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-06 15:31:17
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
        <template v-if="userStore.token">
          <el-dropdown @command="handleCommand">
            <span class="user-info">
              {{ userStore.userInfo?.username }}
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
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { logout } from '@/api/loginApi'
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const activeIndex = ref('home')

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

// 组件挂载时设置初始激活项
onMounted(() => {
  setActiveIndex()
})

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
        userStore.clearUserInfo()
        ElMessage.success('退出成功')
        router.push('/login')
      } else {
        ElMessage.error('退出失败，请稍后重试')
      }
    } catch (error) {
      ElMessage.error('退出失败，请稍后重试')
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
