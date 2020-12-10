import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

// 引入rem布局文件
import '../rem'

// // 手机端调试
// import VConsole from 'vconsole'
// var vConsole = new VConsole()

// $bus
Vue.prototype.$bus = new Vue({})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})