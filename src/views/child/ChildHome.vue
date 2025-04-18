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
      ssr
      script-type="module"
      :inline="true"
      :destroy="true"
      iframe
      name="child-app"
      url="http://localhost:3000/child-home"
      :disable-router="true"
    ></micro-app>
  </div>
</template>

<script setup lang="ts">
// 保持组件简单，不需要额外的逻辑
</script>

<style scoped lang="scss">
.child-home-container {
  width: 100%;
  height: 100%;
}
</style>
