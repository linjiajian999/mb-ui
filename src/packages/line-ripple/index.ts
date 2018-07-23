import Vue from 'vue'

import LineRipple from './line-ripple.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-line-ripple', LineRipple)
}

export default {
  component: LineRipple,
  install
}
