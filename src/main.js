//js
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './vuex/store';
import cookie from '@/../static/js/cookie.js';
import filters from './filters/index.js';
import directives from '@/directives/index.js';

//css
import '../static/css/reset.css'
import '../static/css/element-ui.css'
import '../static/css/iconfont.css'

//less
import "./less/index.less"

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {

    if(false) {
        next({
            path: '/index',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
});

//Vue.config.silent = true;
Vue.config.productionTip = false;

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    router,
    store,
    //组件
    components: {
    }
});