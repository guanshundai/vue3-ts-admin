import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; //持久化状态管理
import "ant-design-vue/dist/antd.less";
import "@/assets/base.less";
import defineComponents from "@/utils/defineComponents"; //全局注册自定义组件
import App from "./App.vue";
import router from "./router";
import { useStore } from "./stores/useStore";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia.use(piniaPluginPersist));

app.use(defineComponents);

router.beforeEach((to: any) => {
  const store = useStore(pinia);
  if (to.meta) {
    store.changeNavKey([to.meta.nav]);
    store.changeSideKey([to.meta.key]);
  }
  if (to.path !== "/login" && !store.token) return "/login";
});

app.mount("#app");
