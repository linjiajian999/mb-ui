import Vue, { PluginFunction } from 'vue'

import Switch from './switch.vue'
import {
  MbComponent
} from '../index'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-switch', Switch)
}
const switchComponent: MbComponent<typeof Switch> = {
  component: Switch,
  install
}
export default switchComponent
