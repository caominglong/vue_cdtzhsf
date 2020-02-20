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
    component: (resolve) => require(['@/views/onlinePay/queryPayList_GF'], resolve)
  }, {
    path: '/DemoSearch',
    name: 'DemoSearch',
    component: (resolve) => require(['@/views/demo/DemoSearch'], resolve)
  }, {
    path: '/payList_GF',
    name: 'payList_GF',
    component: (resolve) => require(['@/views/onlinePay/payList_GF'], resolve)
  }
]
}) 
