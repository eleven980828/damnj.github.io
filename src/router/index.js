import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/home.vue')
      },
      // {
      //   path: '/painting',
      //   name: 'painting',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/painting/painting.vue')
      // },
      {
        path: '/tripPlane',
        name: 'tripPlane',
        component: () => import(/* webpackChunkName: "about" */ '../views/tripPlane/tripPlane.vue')
      },
      {
        path: '/tattoo',
        name: 'tattoo',
        component: () => import(/* webpackChunkName: "about" */ '../views/tattoo/tattoo.vue')
      },
      {
        path: '/booking',
        name: 'booking',
        component: () => import(/* webpackChunkName: "about" */ '../views/booking/booking.vue')
      },
      {
        path: '/works',
        name: 'works',
        component: () => import(/* webpackChunkName: "about" */ '../views/works/works.vue')
      },
      {
        path: '/peripheral',
        name: 'peripheral',
        component: () => import(/* webpackChunkName: "about" */ '../views/peripheral/peripheral.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "about" */ '../views/order/order.vue')
      },
      {
        path: '/choseBook',
        name: 'choseBook',
        component: () => import(/* webpackChunkName: "about" */ '../views/choseBook/choseBook.vue')
      },
      {
        path: '/plantingBook',
        name: 'plantingBook',
        component: () => import(/* webpackChunkName: "about" */ '../views/plantingBook/plantingBook.vue')
      },
      {
        path: '/Link',
        name: 'Link',
        component: () => import(/* webpackChunkName: "about" */ '../views/Link/Link.vue')
      },
    //   {
    //     path: '/special',
    //     name: 'special',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/special/special.vue')
    //   },
]

const router = new VueRouter({
    mode: 'hash',
    routes
  })
  
  export default router
  