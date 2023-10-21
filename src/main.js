import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2';
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';

Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(VueClipboard)
Vue.prototype.$goto=function(routerPath){
  const appDom = document.getElementById('app');
  this.$store.state.scrollVal=appDom.scrollTop
  this.$router.push({name:routerPath})
}
Vue.prototype.$goback=function(){
  this.$router.back()
}
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
