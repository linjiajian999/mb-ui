import './index.scss'
import './public.scss'

import rippleObj from './ripple/index'
import dialogsObj from './dialogs/index'

const list = [
  rippleObj,
  dialogsObj
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
  Ripple: rippleObj.Ripple,
  Dialogs: dialogsObj.Dialogs,
  install
}
