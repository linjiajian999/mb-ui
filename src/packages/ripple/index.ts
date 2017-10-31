import ripple from './ripple.vue'
import Vue, { PluginFunction } from 'vue'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-ripple', ripple)
}
export {
  ripple,
  install
}
export default {
  ripple,
  install
}