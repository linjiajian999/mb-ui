import Vue from 'vue'
import Router from 'vue-router'

import { routes as homeRoutes } from '@/views/1-home'
import { routes as demoRoutes } from '@/views/demo'

Vue.use(Router)

export default new Router({
  routes: [
    ...homeRoutes,
    ...demoRoutes
  ]
})
