import Switch from './switch.vue'
import Vue, { PluginFunction } from 'vue'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-switch', Switch)
}
export {
  Switch,
  install
}
export default {
  Switch,
  install
}
