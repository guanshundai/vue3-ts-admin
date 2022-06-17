<template>
  <a-layout-header class="header flex-r-jb">
    <a-menu v-model:selectedKeys="selectedKeys" @click="getKey" theme="white" mode="horizontal">
      <a-menu-item key="nav1" @click="$router.push('/')">nav 1</a-menu-item>
      <a-menu-item key="nav2" @click="$router.push('/nav2/option1')">nav 2</a-menu-item>
      <a-menu-item key="nav3">nav 3</a-menu-item>
    </a-menu>
    <div class="flex-r-c">
      <redo-outlined style="font-size: 22px;" @click="refresh" />
      <fullscreen-outlined @click="fullScreen" style="font-size: 22px;margin-left: 15px;" v-if="!isFull" />
      <fullscreen-exit-outlined @click="cancelScreen" style="font-size: 22px;margin-left: 15px;" v-else />
      <a-popover :title="'Hello ' + username + ' !'" placement="bottomRight" autoAdjustOverflow>
        <template #content>
          <a>
            <p>Profile</p>
          </a>
          <a>
            <p>Settings</p>
          </a>
          <a @click="$router.push('/login')">
            <p>Log out</p>
          </a>
        </template>
        <a-avatar shape="square" :src="logo" :size="42" style="margin-left: 15px;"></a-avatar>
      </a-popover>
    </div>
  </a-layout-header>
</template>

<script setup lang='ts'>
import { ref, onMounted, inject } from 'vue'
import { FullscreenOutlined, FullscreenExitOutlined, RedoOutlined } from '@ant-design/icons-vue';
import logo from '@/assets/jingyu.png'

import { useStore } from '@/stores/useStore'

const { navKey, changeNavKey, changeSideKey, username } = useStore()

const emit = defineEmits<{ (event: 'getKey', key: string, sideKey: string[]): void }>()

const selectedKeys = ref<string[]>(['nav1'])
const isFull = ref<boolean>(false)

const fresh = inject<any>('refresh')

onMounted(() => {
  selectedKeys.value = navKey
})

const getKey = ({ key }: { key: string }) => {
  emit('getKey', key, ['1'])
  changeSideKey(['1'])
  changeNavKey([key])
}

const refresh = () => {
  fresh()
}
const fullScreen = () => {
  isFull.value = true
  document.documentElement.requestFullscreen();
}
const cancelScreen = () => {
  isFull.value = false
  document.exitFullscreen()
}
</script>

<style scoped lang='less'>
.header {
  background: #fff;
  padding: 0 15px;
}

.ant-layout-header {
  :deep(.ant-menu-item) {
    padding: 0 30px;
  }
}
</style>