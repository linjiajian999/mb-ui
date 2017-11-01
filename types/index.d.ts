import Vue, { PluginFunction } from 'vue'
import {
  MbDialogsClass
} from './dialogs'
export interface MbUiObject {
  Ripple: {
    Ripple: Vue
    install: PluginFunction<any>
  }
  Dialogs: {
    Dialogs: MbDialogsClass
    install: PluginFunction<any>
  }
  Input: {
    Input: Vue
    install: PluginFunction<any>
  }
  install: PluginFunction<any>
}