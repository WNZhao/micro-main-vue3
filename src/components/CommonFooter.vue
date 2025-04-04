<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-04 14:29:05
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-04 17:37:11
 * @FilePath: /micro-main-vue3/src/components/CommonFooter.vue
 * @Description: 页脚组件
-->
<template>
  <footer class="common-footer">
    <div class="footer-bottom">
      <p>© {{ currentYear }} 招聘系统. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped lang="scss">
.common-footer {
  background-color: #202329;
  color: #fff;
  padding: 15px 0;
  margin-top: auto;

  .footer-bottom {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

    p {
      margin: 0;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
