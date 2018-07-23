import Vue from 'vue'

import Fab from './fab.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-fab', Fab)
}

export default {
  component: Fab,
  install
}
