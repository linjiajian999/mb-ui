import Vue from 'vue'

import LinearProgress from './linear-progress.vue'

const install = (vue: typeof Vue) => {
  vue.component('linear-progress', LinearProgress)
}

export default {
  component: LinearProgress,
  install
}
