import Vue from 'vue'

import SelectionControl from './selection-control.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-selection-control', SelectionControl)
}

export default {
  component: SelectionControl,
  install
}
