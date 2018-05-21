import Vue from 'vue'
import VueResource from 'vue-resource'

import store from './config/store'
import router from './config/router'
import App from './components/App/App.vue'

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
