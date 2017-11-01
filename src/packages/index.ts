import './index.scss'
import './public.scss'

import Ripple from './ripple/index'
import Dialogs from './dialogs/index'
import Input from './input/index'
const list = [
  Ripple,
  Dialogs,
  Input
]

import Vue, { PluginFunction } from 'vue'
const install: PluginFunction<any> = function (vue: typeof Vue, options?: any) {
  list.forEach((plugin) => {
    if (typeof plugin.install === 'function') {
      vue.use(plugin.install)
    }
  })
}
export {
  install
}
export default {
  ...list,
  install
}
