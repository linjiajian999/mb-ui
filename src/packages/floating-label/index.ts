import Vue from 'vue'

import FloatingLabel from './floating-label.vue'

const install = (vue: typeof Vue) => {
  vue.component('floating-label', FloatingLabel)
}

export default {
  component: FloatingLabel,
  install
}
