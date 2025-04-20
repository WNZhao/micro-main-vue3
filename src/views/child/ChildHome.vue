<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-03 21:16:45
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-10 19:24:38
 * @FilePath: /micro-main-vue3/src/views/child/childHome.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="child-home-container">
    <!--
      :disable-scopecss="true"
      :disable-sandbox="true"
      script-type="module"
    -->
    <micro-app
      :name="microAppConfig.home.name"
      :url="microAppConfig.home.url"
      :iframe="microAppConfig.home.iframe"
      :disable-router="microAppConfig.home.disableRouter"
      :ssr="microAppConfig.home.ssr"
      :script-type="microAppConfig.home.scriptType"
      :inline="microAppConfig.home.inline"
      :destroy="microAppConfig.home.destroy"
    ></micro-app>
  </div>
</template>

<script setup lang="ts">
import { microAppConfig } from '@/config/micro-app'
</script>

<style scoped lang="scss">
.child-home-container {
  width: 100%;
  height: 100%;
}
</style>
