import Vue from 'vue'

import Select from './select.vue'

const install = (vue: typeof Vue) => {
  vue.component('select', Select)
}

export default {
  component: Select,
  install
}
