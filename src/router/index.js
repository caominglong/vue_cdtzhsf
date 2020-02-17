import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'demo',
    component: (resolve) => require(['@/views/demo/index'], resolve)
  }, {
    path: '/DemoSearch',
    name: 'DemoSearch',
    component: (resolve) => require(['@/views/demo/DemoSearch'], resolve)
  }]
}) 
