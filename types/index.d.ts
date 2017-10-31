import Vue, { PluginFunction } from 'vue'
export interface MbUiObject {
  Ripple: Vue
  Dialogs: Vue
  install: (vue: typeof Vue, options?: any) => void
}