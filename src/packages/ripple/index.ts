import Vue, { PluginFunction } from 'vue'

import Ripple from './ripple.vue'
import {
  MbComponent
} from '../index'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-ripple', Ripple)
}
const rippleComponent: MbComponent<typeof Ripple> = {
  component: Ripple,
  install
}
export default rippleComponent
