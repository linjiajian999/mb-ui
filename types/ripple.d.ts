import Vue, { PluginFunction } from 'vue'

export default interface ripplePlugin {
  Ripple: Vue
  install: PluginFunction<any>
}
