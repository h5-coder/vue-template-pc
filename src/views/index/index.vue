<template>
    <div class="">
        主页
        <div class="chart" id="chart"></div>
    </div>
</template>

<script>
    //import  from ''
    const echarts = require('echarts');

    export default {
        //组件名
        name: 'index',
        //实例的数据对象
        data() {
            return {

            }
        },
        //数组或对象，用于接收来自父组件的数据
        props: {

        },
        //计算
        computed: {

        },
        //方法
        methods: {

        },
        //生命周期函数 请求写在created中
        created() {

        },
        beforeMount() {

        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(document.getElementById('chart'));
            // 绘制图表
            myChart.setOption({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            });
        },
        //组件
        components: {

        },
        //监视
        watch: {

        },
        //过滤器
        filters:{

        },
        //自定义指令
        directive:{

        }
    }
</script>

<!--
	作者：liangyanxiangde@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>
    .chart{
        width: 450px;
        height: 400px;
    }
</style>