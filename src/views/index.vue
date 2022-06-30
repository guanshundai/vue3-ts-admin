<template>
  <a-layout style="height: 100vh;">
    <Sider :select="select" :sideKey="sideKey" />
    <a-layout style="overflow-x: auto;">
      <div style="min-width: 1024px;height: 100vh;">
        <Header @getKey="getKey" />
        <Content />
        <Footer />
      </div>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from '@/stores/useStore'

const store = useStore()

const select = ref<string>('nav1')
const sideKey = ref<string[]>(['1'])

watch(
  () => store.navKey,
  () => select.value = store.navKey.join('')
)
onMounted(() => {
  select.value = store.navKey.join('')
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
