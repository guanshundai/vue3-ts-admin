<template>
  <a-spin :spinning="spinning" style="max-height: 100%">
    <router-view v-if="isRefresh">
    </router-view>
  </a-spin>
</template>

<script setup lang='ts'>
import { ref, provide, nextTick } from 'vue'

const isRefresh = ref<boolean>(true)
const spinning = ref<boolean>(false)
let timer: any = null

const refresh = async () => {
  isRefresh.value = false;
  spinning.value = true
  await nextTick()
  isRefresh.value = true;
  timer = setTimeout(() => {
    spinning.value = false
    timer = null
  }, 500)
};

provide('refresh', refresh)
</script>

<style scoped lang='less'>
</style>