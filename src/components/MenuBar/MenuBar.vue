<template>
    <aside class="menu">
        <!--<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router>
            <template v-for="(item,index) in menu">
                <el-submenu :index="index+''" v-if="item.children">
                    <template slot="title">
                        <i class="iconfont" :class="item.icon"></i>{{item.name}}
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                        <i class="iconfont" :class="child.icon"></i>{{child.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-if="!item.children" :index="item.path">
                    <i class="iconfont" :class="item.icon"></i>{{item.name}}
                </el-menu-item>
            </template>
        </el-menu>-->
        <!--
        	作者：liangyanxiangde@163.com
        	时间：2017-06-01
        	描述：路由版
        -->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="item.children">
                    <template slot="title">
                        <i class="iconfont" :class="item.icon"></i>{{item.name}}
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                        <i class="iconfont" :class="child.icon"></i>{{child.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-if="!item.children" :index="item.path">
                    <i class="iconfont" :class="item.icon"></i>{{item.name}}
                </el-menu-item>
            </template>
        </el-menu>
    </aside>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: [
            'menu'
        ],
        methods: {
            handleopen() {

            },
            handleclose() {

            },
            handleselect() {

            }
        },
        created() {
            console.log('menuBar', this.menu);
        },
        watch: {

        },
        //组件
        components: {

        }
    }
</script>

<style lang="less">
    /*.el-submenu.is-active .el-submenu__title{
       background: #53bdfa;
   }*/

    .el-menu {
        background: #0b8aee;
    }
    .el-menu-item, .el-submenu__title{
        &:hover{
            background: #53bdfa;
        }
    }
    .el-submenu .el-menu-item{
        color:#0b8aee;
        &:hover{
        color: #fff;
    }
    }
    .el-menu-item.is-active {
        color: #fff;
        background: #53bdfa;
    }

    .iconfont {
        float: left;
        padding: 0 10px 0 0;
        line-height: inherit;
        font-size: 20px;
    }

</style>
