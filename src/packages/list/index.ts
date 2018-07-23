import Vue from 'vue'

import List from './list.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-list', List)
}

export default {
  component: List,
  install
}
