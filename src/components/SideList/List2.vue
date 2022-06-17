<template>
  <a-menu-item key="1" @click="$router.push('/nav2/option1')">
    <pie-chart-outlined />
    <span>Option 1</span>
  </a-menu-item>
  <a-menu-item key="2" @click="$router.push('/nav2/option2')">
    <desktop-outlined />
    <span>Option 2</span>
  </a-menu-item>
  <a-menu-item key="3">
    <desktop-outlined />
    <span>Option 3</span>
  </a-menu-item>
  <a-menu-item key="4">
    <desktop-outlined />
    <span>Option 4</span>
  </a-menu-item>
  <a-sub-menu key="sub1">
    <template #title>
      <span>
        <user-outlined />
        <span>User</span>
      </span>
    </template>
    <a-menu-item key="5">Tom</a-menu-item>
    <a-menu-item key="6">Bill</a-menu-item>
    <a-menu-item key="7">Alex</a-menu-item>
  </a-sub-menu>
</template>

<script setup lang='ts'>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
</script>

<style scoped lang='less'>
</style>