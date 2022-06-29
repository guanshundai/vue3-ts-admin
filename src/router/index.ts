import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "option1" },
      component: Layout,
      children: [
        {
          path: "option1",
          name: "option1",
          component: () => import("@/views/Home/Option1.vue"),
        },
        {
          path: "option2",
          name: "option2",
          component: () => import("@/views/Home/Option2.vue"),
        },
      ],
    },
    {
      path: "/nav2",
      name: "nav2",
      redirect: { name: "nav2Option1" },
      component: Layout,
      children: [
        {
          path: "option1",
          name: "nav2Option1",
          component: () => import("@/views/Nav2/option1.vue"),
        },
        {
          path: "option2",
          name: "nav2Option2",
          component: () => import("@/views/Nav2/option2.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/index.vue"),
    },
  ],
});

export default router;
