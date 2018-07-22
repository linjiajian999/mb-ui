import { RouteConfig } from 'vue-router'

const home = () =>  import(/* webpackChunkName: "1-home" */ './home.vue')
const about = () => import(/* webpackChunkName: "1-home" */ './about.vue')

export const routes: RouteConfig[] = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: home,
    meta: {
      level: 0,
      title: 'home',
      requireAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: {
      level: 0,
      title: 'about',
      requireAuth: true
    }
  }
]
