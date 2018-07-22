import Vue from 'vue'

import Textfield from './textfield.vue'

const install = (vue: typeof Vue) => {
  vue.component('textfield', Textfield)
}

export default {
  component: Textfield,
  install
}
