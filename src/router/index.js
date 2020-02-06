import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login/index.vue";
import DashboardLayout from '@/layout/DashboardLayout'
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index'),
    hidden: true
  },
  {
    path: "/",
    redirect: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Dashboard.vue')
      },
      {
        path: '/Audio',
        name: 'Audio',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Audio.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/UserProfile.vue')
      },
      {
        path: '/permission',
        name: 'permission',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Permission.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Tables.vue')
      }
    ]
  },

];

const router = new VueRouter({
  routes
});

export default router;
