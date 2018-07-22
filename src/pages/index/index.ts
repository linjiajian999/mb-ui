import Vue from 'vue'

import App from '@/App.vue'
import '@/registerServiceWorker'
import '@/assets/styles/index.scss'

import router from '@/pages/index/router'
import store from '@/pages/index/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
