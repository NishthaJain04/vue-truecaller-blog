import Vue from "vue";
import VueRouter from "vue-router";
import Blogs from "../views/Blogs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Blogs",
    component: Blogs
  },
  {
    path: "/post/detail/:id",
    name: "BlogDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogDetail.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
