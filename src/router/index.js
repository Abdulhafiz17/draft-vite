import { createRouter, createWebHistory } from "vue-router";
import util from "../server/util";

const routes = [
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
];

routes.forEach((item) => {
  item.path = util.routerPrefix() + item.path;
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
