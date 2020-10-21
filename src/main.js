import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import 'css/common'

Vue.config.productionTip = false
Vue.use(VCharts)

import charts from 'components/index.js'
Vue.use(charts)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import directive from 'js/directive.js'
Vue.use(directive)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('hello')
