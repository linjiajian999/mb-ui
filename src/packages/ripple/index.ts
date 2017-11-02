import Ripple from './ripple.vue'
import Vue, { PluginFunction } from 'vue'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-ripple', Ripple)
}
export {
  Ripple,
  install
}
export default {
  Ripple,
  install
}
