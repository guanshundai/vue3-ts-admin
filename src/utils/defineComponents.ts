import type { App } from "vue";

import Header from "@/components/Layout/Header.vue";
import Sider from "@/components/Layout/Sider.vue";
import Content from "@/components/Layout/Content.vue";
import Footer from "@/components/Layout/Footer.vue";
import List1 from "@/components/SideList/List1.vue";
import List2 from "@/components/SideList/List2.vue";
import List3 from "@/components/SideList/List3.vue";

export default (app: App) => {
  app
    .component("Header", Header)
    .component("Sider", Sider)
    .component("Content", Content)
    .component("Footer", Footer)
    .component('List1', List1)
    .component('List2', List2)
    .component('List3', List3)
};
