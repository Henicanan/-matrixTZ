import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/mainpage",
    },
    {
      path: "/mainpage",
      name: "mainpage",
      component: () => import("../components/MainPage.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../components/SignIn.vue"),
    },
    {
      path: "/centerblock",
      name: "centerblock",
      component: () => import("../components/CenterBlock.vue"),
    },
  ],
});
