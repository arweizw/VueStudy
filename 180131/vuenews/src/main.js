import Vue from 'vue'
import App from './App.vue'
import AV from 'leancloud-storage'

const APP_ID = 'QvvBTXGXNEBc4NRAJQDQVmba-gzGzoHsz';
const APP_KEY = 'wEkTm23wYI3AGxvwNfhlJa2P';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
new Vue({
    el: '#app',
    render: h => h(App)
})