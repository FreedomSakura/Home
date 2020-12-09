import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

import '../rem'

// $bus
Vue.prototype.$bus = new Vue({})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
