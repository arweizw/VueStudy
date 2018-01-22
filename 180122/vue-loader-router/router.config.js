/* 专门配置路由规则 */

//引入模块
import Home from "./src/components/Home.vue"
import News from "./src/components/News.vue"
import Login from './src/components/Login.vue'
import Reg from './src/components/Reg.vue'
import Detail from './src/components/Detail.vue'

export default {
    "/home": {
        component: Home,
        subRoutes: {
            login: {
                component: Login
            },
            reg: {
                component: Reg
            }
        }
    },
    "/news": {
        component: News,
        subRoutes: {
            'detail/:id': {
                component: Detail
            }
        }
    }
};