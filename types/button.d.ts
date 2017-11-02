import Vue, { PluginFunction } from 'vue'

export default interface ripplePlugin {
  Switch: Vue
  install: PluginFunction<any>
}
