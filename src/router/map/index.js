//home组件
const Home = resolve => require(['@/components/Home/Home.vue'], resolve)
const Index = resolve => require(['@/views/index/index.vue'], resolve)

export default {
    path: '/',
    component: Home,
    name: 'home',
    icon: '', //图标样式class
    children: [{
        path: '/index',
        component: Index,
        name: '主页',
        icon: ''
    }]
}