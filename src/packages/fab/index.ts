import Vue from 'vue'

import Fab from './fab.vue'

const install = (vue: typeof Vue) => {
  vue.component('fab', Fab)
}

export default {
  component: Fab,
  install
}
