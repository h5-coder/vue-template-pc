import Vue from 'vue'
import Router from 'vue-router'

//home组件
const Home = resolve => require(['@/components/Home/Home.vue'], resolve)
import Index from './map/index'

//重定向 放最后面
import Redirect from './map/Redirect'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    routes: [
        Index,//主页
        Redirect, //路由重定向(访问不存在的页面时，重定向到这个页面) 放最后面
    ]
})