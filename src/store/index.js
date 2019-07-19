import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user/module.js';

Vue.use(Vuex);

// 应用初始状态
const state = {};

// 定义所需的 mutations
const mutations = {};

// 创建 store 实例
export default new Vuex.Store({
    modules: {
        user
    },
    state,
    mutations
});
