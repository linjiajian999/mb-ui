import { RouteConfig } from 'vue-router'

const demo = () =>  import(/* webpackChunkName: "demo" */ './demo.vue')
const elevation = () =>  import(/* webpackChunkName: "demo" */ './elevation.vue')
const ripple = () =>  import(/* webpackChunkName: "demo" */ './ripple.vue')

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
  {
    path: '/demo/elevation',
    name: 'demo-elevation',
    component: elevation,
    meta: {title: 'elevation'}
  },
  {
    path: '/demo/ripple',
    name: 'demo-ripple',
    component: ripple,
    meta: { title: 'ripple' }
  }
]
