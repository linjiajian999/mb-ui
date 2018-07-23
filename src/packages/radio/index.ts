import Vue from 'vue'

import Radio from './radio.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-radio', Radio)
}

export default {
  component: Radio,
  install
}
