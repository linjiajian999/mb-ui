import { RouteConfig } from 'vue-router'

const demo = () =>  import(/* webpackChunkName: "demo" */ './demo.vue')

// import start
const Button = () =>  import(/* webpackChunkName: "demo" */ './button.vue')
const Card = () =>  import(/* webpackChunkName: "demo" */ './card.vue')
const Checkbox = () =>  import(/* webpackChunkName: "demo" */ './checkbox.vue')
const Chips = () =>  import(/* webpackChunkName: "demo" */ './chips.vue')
const Dialog = () =>  import(/* webpackChunkName: "demo" */ './dialog.vue')
const Drawer = () =>  import(/* webpackChunkName: "demo" */ './drawer.vue')
const Elevation = () =>  import(/* webpackChunkName: "demo" */ './elevation.vue')
const Fab = () =>  import(/* webpackChunkName: "demo" */ './fab.vue')
const FloatingLabel = () =>  import(/* webpackChunkName: "demo" */ './floating-label.vue')
const ImageList = () =>  import(/* webpackChunkName: "demo" */ './image-list.vue')
const LineRipple = () =>  import(/* webpackChunkName: "demo" */ './line-ripple.vue')
const LinearProgress = () =>  import(/* webpackChunkName: "demo" */ './linear-progress.vue')
const List = () =>  import(/* webpackChunkName: "demo" */ './list.vue')
const Radio = () =>  import(/* webpackChunkName: "demo" */ './radio.vue')
const Ripple = () =>  import(/* webpackChunkName: "demo" */ './ripple.vue')
const Select = () =>  import(/* webpackChunkName: "demo" */ './select.vue')
const SelectionControl = () =>  import(/* webpackChunkName: "demo" */ './selection-control.vue')
const Shape = () =>  import(/* webpackChunkName: "demo" */ './shape.vue')
const Switch = () =>  import(/* webpackChunkName: "demo" */ './switch.vue')
const Textfield = () =>  import(/* webpackChunkName: "demo" */ './textfield.vue')
const TopAppBar = () =>  import(/* webpackChunkName: "demo" */ './top-app-bar.vue')
// import end

export const routes: RouteConfig[] = [
  {
    path: '/demo',
    name: 'demo',
    component: demo,
    meta: {
      level: 0,
      title: 'demo',
      requireAuth: true
    }
  },
// demo link start
  {
    path: '/demo/button',
    name: 'demo-button',
    component: Button,
    meta: { title: 'button' }
  },
  {
    path: '/demo/card',
    name: 'demo-card',
    component: Card,
    meta: { title: 'card' }
  },
  {
    path: '/demo/checkbox',
    name: 'demo-checkbox',
    component: Checkbox,
    meta: { title: 'checkbox' }
  },
  {
    path: '/demo/chips',
    name: 'demo-chips',
    component: Chips,
    meta: { title: 'chips' }
  },
  {
    path: '/demo/dialog',
    name: 'demo-dialog',
    component: Dialog,
    meta: { title: 'dialog' }
  },
  {
    path: '/demo/drawer',
    name: 'demo-drawer',
    component: Drawer,
    meta: { title: 'drawer' }
  },
  {
    path: '/demo/elevation',
    name: 'demo-elevation',
    component: Elevation,
    meta: { title: 'elevation' }
  },
  {
    path: '/demo/fab',
    name: 'demo-fab',
    component: Fab,
    meta: { title: 'fab' }
  },
  {
    path: '/demo/floating-label',
    name: 'demo-floating-label',
    component: FloatingLabel,
    meta: { title: 'floating-label' }
  },
  {
    path: '/demo/image-list',
    name: 'demo-image-list',
    component: ImageList,
    meta: { title: 'image-list' }
  },
  {
    path: '/demo/line-ripple',
    name: 'demo-line-ripple',
    component: LineRipple,
    meta: { title: 'line-ripple' }
  },
  {
    path: '/demo/linear-progress',
    name: 'demo-linear-progress',
    component: LinearProgress,
    meta: { title: 'linear-progress' }
  },
  {
    path: '/demo/list',
    name: 'demo-list',
    component: List,
    meta: { title: 'list' }
  },
  {
    path: '/demo/radio',
    name: 'demo-radio',
    component: Radio,
    meta: { title: 'radio' }
  },
  {
    path: '/demo/ripple',
    name: 'demo-ripple',
    component: Ripple,
    meta: { title: 'ripple' }
  },
  {
    path: '/demo/select',
    name: 'demo-select',
    component: Select,
    meta: { title: 'select' }
  },
  {
    path: '/demo/selection-control',
    name: 'demo-selection-control',
    component: SelectionControl,
    meta: { title: 'selection-control' }
  },
  {
    path: '/demo/shape',
    name: 'demo-shape',
    component: Shape,
    meta: { title: 'shape' }
  },
  {
    path: '/demo/switch',
    name: 'demo-switch',
    component: Switch,
    meta: { title: 'switch' }
  },
  {
    path: '/demo/textfield',
    name: 'demo-textfield',
    component: Textfield,
    meta: { title: 'textfield' }
  },
  {
    path: '/demo/top-app-bar',
    name: 'demo-top-app-bar',
    component: TopAppBar,
    meta: { title: 'top-app-bar' }
  },
// demo link end
]
