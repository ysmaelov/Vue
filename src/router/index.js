import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GridLayouts from '@/components/GridLayouts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/GridLayouts',
      name: 'GridLayouts',
      component: GridLayouts
    }
  ]
})
