import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
