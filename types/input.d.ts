import Vue, { PluginFunction } from 'vue'

export default interface ripplePlugin {
  Input: Vue
  install: PluginFunction<any>
}
