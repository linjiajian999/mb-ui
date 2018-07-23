import Vue, { PluginFunction } from 'vue'
export interface MBBaseComponet<I> {
  component: typeof Vue,
  install: PluginFunction<I>
}

// import start
import Button from './button'
import Card from './card'
import Checkbox from './checkbox'
import Chips from './chips'
import Dialog from './dialog'
import Drawer from './drawer'
import Elevation from './elevation'
import Fab from './fab'
import FloatingLabel from './floating-label'
import ImageList from './image-list'
import LineRipple from './line-ripple'
import LinearProgress from './linear-progress'
import List from './list'
import Radio from './radio'
import Ripple from './ripple'
import Select from './select'
import SelectionControl from './selection-control'
import Shape from './shape'
import Switch from './switch'
import Textfield from './textfield'
import TopAppBar from './top-app-bar'
// import end
export interface ComponentsMap {
  [key: string]: MBBaseComponet<any>
}

export const components: ComponentsMap = {
// export start
  Button,
  Card,
  Checkbox,
  Chips,
  Dialog,
  Drawer,
  Elevation,
  Fab,
  FloatingLabel,
  ImageList,
  LineRipple,
  LinearProgress,
  List,
  Radio,
  Ripple,
  Select,
  SelectionControl,
  Shape,
  Switch,
  Textfield,
  TopAppBar,
// export end
}
