// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import vueg from '../static/vueg'
import App from './App'
import store from './store'
import router from './router'
import * as filters from './filters' // ??vue filter
import ComScroll from '@/components/ComScroll.vue'; // ?????? ????
import ComCell from '@/components/ComCell.vue' // ??????
import {
  ToastPlugin,
  LoadingPlugin,
  ConfirmPlugin
} from 'vux'
import './styles/base.less'
import './styles/common.less'
import common from '@/utils/common-for-vue.js'
import '../static/font-awesome/css/font-awesome.min.css' // 用法 <i class="fa fa-search fa-lg"></i>

Vue.component('ComScroll', ComScroll)
Vue.component('ComCell', ComCell)

Vue.prototype.common = common

FastClick.attach(document.body)

// ???????
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(vueg, router)
Vue.use(ToastPlugin) // this.$vux.toast.show()
Vue.use(ConfirmPlugin) // this.$vux.confirm.show()
Vue.use(LoadingPlugin) // this.$vux.loading.show()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
