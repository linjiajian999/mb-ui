import Vue from 'vue'

import Select from './select.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-select', Select)
}

export default {
  component: Select,
  install
}
