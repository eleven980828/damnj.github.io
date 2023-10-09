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
        path: '/painting',
        name: 'painting',
        component: () => import(/* webpackChunkName: "about" */ '../views/painting/painting.vue')
      },
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
  