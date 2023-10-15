import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "./views/IndexPage.vue"

export const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: "/",
      component: IndexPage
    }
  ]
})