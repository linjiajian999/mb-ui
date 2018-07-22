import Vue from 'vue'

import Drawer from './drawer.vue'

const install = (vue: typeof Vue) => {
  vue.component('drawer', Drawer)
}

export default {
  component: Drawer,
  install
}
