import Vue from 'vue'

import Dialog from './dialog.vue'

const install = (vue: typeof Vue) => {
  vue.component('dialog', Dialog)
}

export default {
  component: Dialog,
  install
}
