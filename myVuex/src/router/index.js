import Vue from 'vue'
import Router from 'vue-router'
import FatherOne from '@/layout/FatherOne'
import FatherTwo from '@/layout/FatherTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FatherOne',
      component: FatherOne
    },
    {
      path: '/FatherOne',
      name: 'FatherOne',
      component: FatherOne
    },
    {
      path: '/FatherTwo',
      name: 'FatherTwo',
      component: FatherTwo
    }
  ]
})
