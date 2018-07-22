import Vue from 'vue'

import Checkbox from './checkbox.vue'

const install = (vue: typeof Vue) => {
  vue.component('checkbox', Checkbox)
}

export default {
  component: Checkbox,
  install
}
