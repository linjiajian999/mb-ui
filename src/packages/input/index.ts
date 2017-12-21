import Vue, { PluginFunction } from 'vue'

import Input from './input.vue'
import {
  MbComponent
} from '../index'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-input', Input)
}
const inputComponents: MbComponent<typeof Input> = {
  component: Input,
  install
}
export default inputComponents
