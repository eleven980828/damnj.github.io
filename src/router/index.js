import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/home.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/link/link.vue')
      },
      {
        path: '/booking',
        name: 'booking',
        component: () => import(/* webpackChunkName: "about" */ '../views/booking/booking.vue')
      },
      {
        path: '/tattoo',
        name: 'tattoo',
        component: () => import(/* webpackChunkName: "about" */ '../views/tattoo/tattoo.vue')
      },
]

const router = new VueRouter({
    mode: 'hash',
    routes
  })
  
  export default router
  