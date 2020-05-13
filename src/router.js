import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Index from "./pages/index";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "my home",
      component: Home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component:Index
        },
      ]
    },
    {
      path: "/login",
      name: "login1",
      component: Login,
    },
  ],
});
