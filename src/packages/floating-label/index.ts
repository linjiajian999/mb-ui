import Vue from 'vue'

import FloatingLabel from './floating-label.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-floating-label', FloatingLabel)
}

export default {
  component: FloatingLabel,
  install
}
