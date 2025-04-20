<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-04 17:07:21
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-18 13:10:31
 * @FilePath: /micro-main-vue3/src/views/child/ChildEnterprise.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="child-enterprise-container">
    <micro-app
      :name="microAppConfig.enterprise.name"
      :url="microAppConfig.enterprise.url"
      :iframe="microAppConfig.enterprise.iframe"
      :disable-router="microAppConfig.enterprise.disableRouter"
    ></micro-app>
  </div>
</template>

<script setup lang="ts">
import { microAppConfig } from '@/config/micro-app'
</script>

<style scoped lang="scss">
.child-enterprise-container {
  width: 100%;
  height: 100%;
}
</style>
