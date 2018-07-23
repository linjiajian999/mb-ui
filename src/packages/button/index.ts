import Vue from 'vue'

import Button from './button.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-button', Button)
}

export default {
  component: Button,
  install
}
