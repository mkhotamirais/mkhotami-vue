import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/Layout.vue"),
    children: [
      { path: "", component: () => import("../views/Home.vue") },
      {
        path: "basic",
        component: () => import("../layouts/BasicLayout.vue"),
        children: [
          { path: "basic1", component: () => import("../views/basic/Basic1.vue") },
          { path: "basic2", component: () => import("../views/basic/Basic2.vue") },
          { path: "basic3", component: () => import("../views/basic/Basic3.vue") },
          { path: "basic4Fetch", component: () => import("../views/basic/Basic4Fetch.vue") },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
