// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mb from './packages'
Vue.use(mb)

/* eslint-disable no-new */
declare interface myWindow extends Window {
  selfApp: Vue
}
declare const window: myWindow
setTimeout((): any =>  {
  window.selfApp = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    methods: {
      click() {
        this.$mbDialogs.show()
      }
    }
  })
}, 0)

