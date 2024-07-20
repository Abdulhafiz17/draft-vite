import { createRouter, createWebHistory } from "vue-router";
const isProduct = process.env.NODE_ENV === "production" ? true : false;

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
  if (isProduct) item.path = `/draft-vite/${item.path}`;
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
