import Vue from 'vue'

import List from './list.vue'

const install = (vue: typeof Vue) => {
  vue.component('list', List)
}

export default {
  component: List,
  install
}
