<template>
  <a-menu-item key="1" @click="$router.push('/option1')">
    <pie-chart-outlined />
    <span>Option 1</span>
  </a-menu-item>
  <a-menu-item key="2" @click="$router.push('/option2')">
    <desktop-outlined />
    <span>Option 2</span>
  </a-menu-item>
  <a-sub-menu key="sub1">
    <template #title>
      <span>
        <user-outlined />
        <span>User</span>
      </span>
    </template>
    <a-menu-item key="3">Tom</a-menu-item>
    <a-menu-item key="4">Bill</a-menu-item>
    <a-menu-item key="5">Alex</a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="sub2">
    <template #title>
      <span>
        <team-outlined />
        <span>Team</span>
      </span>
    </template>
    <a-menu-item key="6">Team 1</a-menu-item>
    <a-menu-item key="8">Team 2</a-menu-item>
  </a-sub-menu>
  <a-menu-item key="9">
    <file-outlined />
    <span>File</span>
  </a-menu-item>
</template>

<script setup lang='ts'>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
</script>

<style scoped lang='less'>
</style>