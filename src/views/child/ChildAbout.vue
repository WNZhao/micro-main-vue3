<!--
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-04 17:07:20
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-18 17:22:27
 * @FilePath: /micro-main-vue3/src/views/child/ChildAbout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="child-about-container">
    <micro-app
      :name="microAppConfig.about.name"
      :url="microAppConfig.about.url"
      :iframe="microAppConfig.about.iframe"
      :disable-router="microAppConfig.about.disableRouter"
    ></micro-app>
  </div>
</template>

<script setup lang="ts">
import { microAppConfig } from '@/config/micro-app'
</script>

<style scoped lang="scss">
.child-about-container {
  width: 100%;
  height: 100%;
}
</style>
