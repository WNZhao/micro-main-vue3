<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-04-03 17:03:48
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-16 15:33:34
 * @FilePath: /micro-main-vue3/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
const isChildJob = computed(() => route.path === '/main/childJob')
</script>

<template>
  <div class="app-container" :class="{ 'login-page': isLoginPage }">
    <common-header v-if="!isLoginPage" />
    <main class="main-content" :class="{ 'login-content': isLoginPage, 'no-padding': isChildJob }">
      <router-view></router-view>
    </main>
    <common-footer v-if="!isLoginPage" />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container.login-page {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  background-image: url('@/assets/images/trial_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.main-content.login-content {
  padding: 0;
}

.main-content.no-padding {
  padding: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
