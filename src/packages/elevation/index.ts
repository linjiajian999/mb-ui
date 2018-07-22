import Vue, { VNodeDirective} from 'vue'

import Elevation from './elevation.vue'

const install = (vue: typeof Vue) => {
  const checkValue = (value: any): boolean => {
    if (isNaN(value)) {
      console.error('the value of directive v-elevation should be a number or number string')
      return false
    }
    if (value > 24 || value < 1) {
      console.error('the value of directive v-elevation should be >=1 or <=24')
      return false
    }
    return true
  }
  vue.component('mdc-elevation', Elevation)
  Vue.directive('elevation', {
    bind(el: HTMLElement, binding: VNodeDirective) {
      const value = Math.floor(binding.value)
      if (!checkValue(value)) return

      let className = el.className
      el.className = className.indexOf('mdc-elevation--z') < 0
        ? `${className} mdc-elevation--z${binding.value || 8}`.trim()
        : className.replace(/mdc-elevation--z\d+/g, `mdc-elevation--z${binding.value || 8}`)
    },
    update(el: HTMLElement, binding: VNodeDirective) {
      if (binding.value === binding.oldValue) return
      const value = Math.floor(binding.value)
      if (!checkValue(value)) return
      el.className = el.className.replace(/mdc-elevation--z\d+/g, `mdc-elevation--z${binding.value || 8}`)
    }
  })
}

export default {
  component: Elevation,
  install
}