import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// 引入路由配置文件
import routerConfig from '../router.config.js'
//1.先导入路由

//2.Vue.use 使用
//括号里面要加入使用对象
Vue.use(VueRouter);

//3. 配置路由


const router = new VueRouter();

//4.引入路由相关的vue结尾的模块文件

router.map(routerConfig); //把路由配置文件放入到map当中

router.redirect({
    '/': '/home'
}); //重新定向访问位置

router.start(App, '#app'); //启动路由并绑定到相应的id上