<template>
  <a-layout style="min-height: 100vh">
    <Sider :select="select" :sideKey="sideKey" />
    <a-layout>
      <Header @getKey="getKey" />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from '@/stores/useStore'

const { navKey } = useStore()

const select = ref<string>('nav1')
const sideKey = ref<string[]>(['1'])

onMounted(() => {
  select.value = navKey.join('')
})

const getKey = (key: string, key2: string[]) => {
  select.value = key
  sideKey.value = key2
}
</script>
<style scoped lang="less">
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
