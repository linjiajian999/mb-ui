import Vue, { PluginFunction } from 'vue'
// import MbRipple from 'mbDialogs/index'
export interface MbUiObject {

  install: (vue: typeof Vue, options?: any) => void
}