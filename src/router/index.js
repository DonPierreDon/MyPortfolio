import { createRouter, createWebHistory } from "vue-router";
import CvPage from "@/views/CvPage.vue";
import HomePage from "@/views/HomePage.vue";
import TestPage from "@/views/TestPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/CV",
    name: "cv",
    component: CvPage,
  },
  { path: "/test", name: "test", component: TestPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
