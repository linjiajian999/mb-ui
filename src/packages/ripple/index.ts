import Vue from 'vue'

import { MDCRipple } from 'material__ripple'
import Ripple from './ripple.vue'

const install = (vue: typeof Vue) => {
  vue.component('mdc-ripple', Ripple)
  vue.directive('ripple', {
    bind(el: HTMLElement) {
      if (el.className.indexOf('mb-ripple') < 0) {
        el.className = `${el.className} mb-ripple`.trim()
      }
      MDCRipple.attachTo(el)
    }
  })
}

export default {
  component: Ripple,
  install
}
