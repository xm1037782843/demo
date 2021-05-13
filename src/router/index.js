import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login'
import Layout from '../views/Layout';
import Error from '../views/Error/404.vue';

Vue.use(VueRouter)

//基础路由
export const baseRoutes = [
  {
    path: '',
    name: 'Layout',
    component: Layout,
    children: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        name: '首页',
        icon: "icon-home"
      }
    }, ],
    meta: {
      isLogin: true
    }
  },
  {
    path: '*',
    component: Error
  }
]


const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  }]

const router = new VueRouter({
  routes
})



export default router