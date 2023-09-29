import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/home.vue')
      },
    //   {
    //     path: '/special',
    //     name: 'special',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/special/special.vue')
    //   },
]

const router = new VueRouter({
    routes
  })
  
  export default router
  