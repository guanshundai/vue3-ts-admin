<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="flex-r-c side-logo" style="" @click="$router.push('/')">
      <div class="logo"></div>
      <Transition name="slide-fade">
        <span v-if="!collapsed">AutoFeed</span>
      </Transition>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" theme="dark" mode="inline"
      @click="getOpens">
      <component :is="
        select === 'nav1'
          ? 'List1'
          : select === 'nav2'
            ? 'List2'
            : select === 'nav3'
              ? 'List3'
              : 'List1'
      ">
      </component>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

import { useStore } from "@/stores/useStore";

const store = useStore();

const props = defineProps<{
  select: string;
  sideKey: string[];
}>();

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(props.sideKey);
const openKeys = ref<string[]>(props.sideKey);
const select = ref<string>(props.select);

watch(
  () => props.select,
  () => (select.value = props.select)
);
watch(
  () => props.sideKey,
  () => {
    selectedKeys.value = props.sideKey;
    openKeys.value = props.sideKey;
  }
);
watch(
  () => store.sideKey,
  () => {
    selectedKeys.value = store.sideKey;
    openKeys.value = store.sideKey;
  }
);

onMounted(() => {
  selectedKeys.value = store.sideKey;
  openKeys.value = store.sideKey;
});

const getOpens = ({ keyPath }: { keyPath: string[] }) => {
  openKeys.value = keyPath;
  store.changeSideKey(keyPath);
};
</script>

<style scoped lang="less">
.side-logo {
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  .logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    background-image: url("@/assets/jingyu.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
}


.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
