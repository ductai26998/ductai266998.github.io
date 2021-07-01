import Vue from "vue";
import VueRouter from "vue-router";

import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueCookies from 'vue-cookies'

import Home from "../views/Home.vue";
import UserDetail from "../views/UserDetail.vue";
import UpdateUser from "../views/UpdateUser.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(axios, axios)
Vue.use(VueCookies)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserDetail",
    component: UserDetail,
  },
  {
    path: "/user/update/:id",
    name: "UpdateUser",
    component: UpdateUser,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
