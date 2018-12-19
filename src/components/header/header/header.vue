<template>
    <el-row>
        
    </el-row>
</template>
<script>
    export default {
        name: 'com-header',
        data() {
            return {}
        },
        props: {
            title: {
                type: String,
                default: "头部"
            }
        },
        methods: {
            goIndexPage() {
                this.$router.push('/')
            }
        },
        created() {

        },

    }
</script>

<style lang="less" scoped>
   
</style>