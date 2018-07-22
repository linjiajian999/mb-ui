import Vue from 'vue'

import ImageList from './image-list.vue'

const install = (vue: typeof Vue) => {
  vue.component('image-list', ImageList)
}

export default {
  component: ImageList,
  install
}
