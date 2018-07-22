import Vue from 'vue'

import Button from './button.vue'

const install = (vue: typeof Vue) => {
  vue.component('button', Button)
}

export default {
  component: Button,
  install
}
