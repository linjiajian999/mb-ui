import './index.scss'
import './public.scss'

import Ripple from './ripple'
import Dialogs from './dialogs'
import Input from './input'
import Switch from './switch'
const list = [
  Ripple,
  Dialogs,
  Input,
  Switch
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
