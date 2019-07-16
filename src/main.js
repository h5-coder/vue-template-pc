// js
import 'babel-polyfill' // 解决IE兼容问题
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/'
import '@/../static/js/cookie.js'
import './filters/index.js'
import '@/directives/index.js'

// css
import '../static/css/reset.css'
import '../static/css/element-ui.css'
import '../static/css/iconfont.css'

// less
import './less/index.less'

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    // if (false) {

    //     next({
    //         path: '/index',
    //         query: {
    //             redirect: to.fullPath,
    //         }
    //     })
    // } else {
    //     next()
    // }
    next()
})

// Vue.config.silent = true;
Vue.config.productionTip = false

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {}
    },
    router,
    store,
    // 组件
    components: {},
})
