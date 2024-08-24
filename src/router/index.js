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
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/Contacts/Contacts.vue"),
  },
  {
    path: "/supply-counting",
    name: "supply-counting",
    component: () => import("../views/Supply/SupplyCounting.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("draft-vite"),
  routes: routes,
});

export default router;
