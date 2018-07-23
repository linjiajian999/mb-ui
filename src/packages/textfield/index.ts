import Vue from 'vue'

import Textfield from './textfield.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-textfield', Textfield)
}

export default {
  component: Textfield,
  install
}
