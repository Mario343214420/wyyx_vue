import Vue from 'vue'
import Router from 'vue-router'
const Detail = () => import('../pages/Detail/Detail.vue')
const Home = () => import('../pages/Home/Home.vue')
const List = () => import('../pages/List/List.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Shopcart = () => import('../pages/Shopcart/Shopcart.vue')
const Recommend = () => import('../pages/Detail/Recommend/Recommend.vue')
const Master = () => import('../pages/Detail/Master/Master.vue')
const UpNew = () => import('../pages/Detail/UpNew/UpNew.vue')
const Show = () => import('../pages/Detail/Show/Show.vue')
const D_home = () => import('../pages/Detail/D_home/D_home.vue')


import Login from '../pages/Login/Login.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,

    },

    {
      path: '/detail',
      component: Detail,
      children:[
        {
          path:'/detail/recommend',
          component: Recommend,
        },
        {
          path:'/detail/master',
          component: Master,
        },
        {
          path:'/detail/upNew',
          component: UpNew,
        },
        {
          path:'/detail/show',
          component: Show,
        },
        {
          path:'/detail/d_home',
          component: D_home,
        },
        {
          path: '/detail',
          redirect: '/detail/recommend'
        }
      ]

    },
    {
      path: '/home',
      component: Home,

    },
    {
      path: '/list',
      component: List,
    },

    {
      path: '/personal',
      component: Personal,

    },
    {
      path: '/shopcart',
      component: Shopcart,
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
