import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/Main/Main.vue"),
    },
  ],
});

export default router;
