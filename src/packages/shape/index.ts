import Vue from 'vue'

import Shape from './shape.vue'

const install = (vue: typeof Vue) => {
  vue.component('shape', Shape)
}

export default {
  component: Shape,
  install
}
