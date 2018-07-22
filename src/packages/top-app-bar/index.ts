import Vue from 'vue'

import TopAppBar from './top-app-bar.vue'

const install = (vue: typeof Vue) => {
  vue.component('top-app-bar', TopAppBar)
}

export default {
  component: TopAppBar,
  install
}
