import Vue, { PluginFunction } from 'vue'

import Button from './button.vue'
import {
  MbComponent
} from '../index'

const install: PluginFunction<any> = function(vue: typeof Vue, opt?: any) {
  vue.component('mb-button', Button)
}

const buttonComponent: MbComponent<typeof Button> = {
  component: Button,
  install
}
export default buttonComponent