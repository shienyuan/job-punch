import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Clock",
    component: () => import("../pages/Clock.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../pages/History.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import("../pages/My.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../pages/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
