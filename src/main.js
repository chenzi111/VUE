import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.$Event = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
