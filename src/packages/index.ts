import './index.scss'
import './public.scss'

import Ripple from './ripple'
import Dialogs from './dialogs'
import Input from './input'
import Switch from './switch'
import Button from './button'

import Vue, { PluginFunction } from 'vue'

export interface MbComponent<V> {
  component: V
  install: PluginFunction<any>
}

export interface ComponentList {
  [key: string]: MbComponent<any>
}
export const list: ComponentList = {
  Ripple,
  Dialogs,
  Input,
  Switch,
  Button
}

const install: PluginFunction<any> = function (vue: typeof Vue, options?: any) {
  console.log(list)
  for (let component in list) {
    if (typeof list[component].install === 'function') {
      vue.use(list[component].install)
    }
  }
}
export default install
