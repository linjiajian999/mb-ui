import Vue from 'vue'

import Card from './card.vue'

const install = (vue: typeof Vue) => {
  vue.component('card', Card)
}

export default {
  component: Card,
  install
}
