import Vue from 'vue'

import Switch from './switch.vue'

const install = (vue: typeof Vue) => {
  vue.component('switch', Switch)
}

export default {
  component: Switch,
  install
}
