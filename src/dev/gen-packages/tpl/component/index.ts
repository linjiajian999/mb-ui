import Vue from 'vue'

import __ComponentName__ from './__componentName__.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-__componentName__', __ComponentName__)
}

export default {
  component: __ComponentName__,
  install
}
