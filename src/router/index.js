import { createWebHistory, createRouter } from "vue-router";
import SignIn from "../components/SignIn.vue";

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
      component: SignIn,
    },
    {
      path: "/centerblock",
      name: "centerblock",
      component: () => import("../components/CenterBlock.vue"),
    },
  ],
});
