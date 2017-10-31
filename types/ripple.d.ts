import Vue, { PluginFunction } from 'vue'

export default interface ripplePlugin {
  ripple: Vue
  install: PluginFunction<any>
}
