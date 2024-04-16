import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/auth/Login.vue";
import Register from "./views/auth/Register.vue";
import Layout from "./layouts/Layout.vue";
import Home from "./views/Home.vue";
import ReactionTimer from "./views/reactionTimer/reactionTimer.vue";
import BasicLayout from "./layouts/BasicLayout.vue";
import Basic1 from "./views/basic/basic1.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      { path: "/", name: "Home", component: Home },
      { path: "about", name: "About", component: () => import("./views/About.vue") },
      { path: "reactionTimer", component: ReactionTimer },
      {
        path: "basic",
        component: BasicLayout,
        children: [
          { path: "basic1", component: Basic1 },
          { path: "basic2", component: () => import("./views/basic/Basic2.vue") },
          { path: "basic3", component: () => import("./views/basic/Basic3.vue") },
          { path: "basic4", component: () => import("./views/basic/Basic4.vue") },
          { path: "basic5", component: () => import("./views/basic/Basic5.vue") },
        ],
      },
      { path: "modal", component: () => import("./views/modal/ModalHome.vue") },
      { path: "form", component: () => import("./views/form/Form.vue") },
      { path: "products", component: () => import("./views/product/Products.vue") },
      { path: "products/:id", component: () => import("./views/product/ProductDetail.vue") },
      { path: "fetching", component: () => import("./views/fetching/Fetching.vue") },
      { path: "fetching/:id", props: true, component: () => import("./views/fetching/FetchingDetail.vue") },
    ],
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  // redirect
  { path: "/page-redirect", redirect: "/" },
  { path: "/:catchAll(.*)", name: "not found", component: () => import("./views/404.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
