import Vue from 'vue'

import Chips from './chips.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-chips', Chips)
}

export default {
  component: Chips,
  install
}
