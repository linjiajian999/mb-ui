import Vue, { PluginFunction } from 'vue'
export interface MBBaseComponet<I> {
  component: typeof Vue,
  install: PluginFunction<I>
}

import Elevation from '@/packages/elevation'
import Ripple from '@/packages/ripple'

export interface ComponentsMap {
  [key: string]: MBBaseComponet<any>
}
export const components: ComponentsMap = {
  Elevation,
  Ripple
}
