import Vue from 'vue'
import App from './App.vue'

import EmelmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(EmelmentUI);

new Vue({
    el: '#app',
    render: h => h(App)
})