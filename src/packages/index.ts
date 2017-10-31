import './index.scss'
import './public.scss'

import mbRipple from './ripple/index'
import mbDialogs from './dialogs/index'

const list = [
  mbRipple,
  mbDialogs
]

import Vue, { PluginFunction } from 'vue'
const install: PluginFunction<any> = function (vue: typeof Vue, options?: any) {
  list.forEach((val, index) => {
    if (typeof val.install === 'function') {
      vue.use(val.install)
    }
  })
}
export {
  install
}
export default {
  mbRipple,
  mbDialogs,
  install
}
