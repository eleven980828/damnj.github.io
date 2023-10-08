import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.prototype.$goto=function(routerPath){
  this.$router.push({name:routerPath})
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
