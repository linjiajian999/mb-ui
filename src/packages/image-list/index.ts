import Vue from 'vue'

import ImageList from './image-list.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-image-list', ImageList)
}

export default {
  component: ImageList,
  install
}
