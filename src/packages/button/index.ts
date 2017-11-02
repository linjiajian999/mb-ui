import Button from './button.vue'
import Vue, { PluginFunction } from 'vue'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-button', Button)
}
export {
  Button,
  install
}
export default {
  Button,
  install
}