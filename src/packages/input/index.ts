import Input from './input.vue'
import Vue, { PluginFunction } from 'vue'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-input', Input)
}
export {
  Input,
  install
}
export default {
  Input,
  install
}