<template>
  <a-layout-content class="content">
    <router-view />
  </a-layout-content>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='less'>
.content {
  margin: 10px 16px 0 16px;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  padding: 15px;
}
</style>