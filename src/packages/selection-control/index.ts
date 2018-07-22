import Vue from 'vue'

import SelectionControl from './selection-control.vue'

const install = (vue: typeof Vue) => {
  vue.component('selection-control', SelectionControl)
}

export default {
  component: SelectionControl,
  install
}
