<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-06 16:04:05
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-06 16:22:58
 * @FilePath: /micro-main-vue3/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
      <h2 class="title">用户登录</h2>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名" @keyup.enter="handleLogin" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码"
          @keyup.enter="handleLogin"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" class="login-button" @click="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { accountLogin } from '@/api/loginApi'
import { setGlobalData } from '@/utils/globalData'

defineOptions({
  name: 'LoginPage',
})

const router = useRouter()
const loginFormRef = ref<FormInstance>()
const loading = ref(false)

const loginForm = ref({
  username: '',
  password: '',
})

const loginRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

const handleLogin = async () => {
  if (!loginFormRef.value) return

  try {
    await loginFormRef.value.validate()
    loading.value = true

    const res = await accountLogin({
      account: loginForm.value.username,
      password: loginForm.value.password,
    })

    if (res.code === 200) {
      // 设置登录数据
      const globalData = {
        token: res.data.token,
        user: {
          username: loginForm.value.username,
        },
      }
      // 设置 globalData
      setGlobalData(globalData)
      console.log('设置 globalData:', globalData)
      ElMessage.success('登录成功')
      router.push({ name: 'childHome' })
    } else {
      ElMessage.error(res.message || '登录失败')
    }
  } catch (error) {
    console.error('登录失败:', error)
    ElMessage.error('登录失败，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
}

.login-form {
  width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 30px;
  color: #303133;
}

.login-button {
  width: 100%;
}
</style>
