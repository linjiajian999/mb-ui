import Vue from 'vue'

import Shape from './shape.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-shape', Shape)
}

export default {
  component: Shape,
  install
}
