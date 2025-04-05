<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-04 14:29:05
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-05 16:36:30
 * @FilePath: /micro-main-vue3/src/views/main/UserLogin.vue
 * @Description: 登录页面组件
-->
<template>
  <div class="login-container">
    <div class="login-content">
      <div class="left-section">
        <div class="features">
          <h2>找工作，上DOSS直聘直接谈</h2>
          <ul>
            <li>沟通，在线职位及时沟通</li>
            <li>人性选，各大行业职位任你选</li>
          </ul>
        </div>
        <div class="login-image">
          <img src="@/assets/images/trial_banner.png" alt="登录插图" />
        </div>
      </div>
      <div class="right-section">
        <div class="login-box">
          <h1 class="title">DOSS直聘 | 新一代数字化招聘平台</h1>
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
            <el-form-item prop="account">
              <el-input v-model="loginForm.account" placeholder="请输入账号" :prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="请输入密码"
                :prefix-icon="Lock"
                show-password
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-button" @click="handleLogin"> 登录 </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginFormRef = ref<FormInstance>()

const loginForm = reactive({
  account: '',
  password: '',
})

const loginRules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
})

const handleLogin = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('登录成功')
      router.push('/')
    } else {
      console.log('登录失败', fields)
    }
  })
}
</script>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-content {
  display: flex;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  min-height: 500px;
}

.left-section {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 8px 0 0 8px;
  color: white;

  .features {
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 15px 0;
        font-size: 16px;
        display: flex;
        align-items: center;

        &::before {
          content: '•';
          margin-right: 10px;
          color: #fff;
        }
      }
    }
  }

  .login-image {
    margin-top: 40px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

.right-section {
  flex: 1;
  padding: 40px;
  display: flex;
  align-items: center;

  .login-box {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;

    .title {
      font-size: 20px;
      color: #333;
      margin-bottom: 40px;
      text-align: center;
    }

    .login-form {
      :deep(.el-input) {
        height: 40px;

        .el-input__wrapper {
          background-color: #f5f7fa;
        }
      }

      .login-button {
        width: 100%;
        height: 40px;
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        border: none;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .login-content {
    flex-direction: column;
  }

  .left-section {
    border-radius: 8px 8px 0 0;
    padding: 20px;
  }

  .right-section {
    padding: 20px;
  }
}
</style>
