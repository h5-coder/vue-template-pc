// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: false,//关闭生成map文件
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8081,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false,
        useEslint:true,//Eslint开关
        /*  proxyTable.cookieDomainRewrite：重写set-cookie标题的域。
            可能的值：
                false （默认值）：禁用cookie重写
                字符串：例如新域cookieDomainRewrite: "new.domain"。要删除域，请使用cookieDomainRewrite: ""。
                对象：将域映射到新域，用于"*"匹配所有域。
        */
        // proxyTable:{
        //     '/api':{
        //         target:'http://localhost:8888',
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/api': ''
        //         },
        //         cookieDomainRewrite:'localhost'
        //     },
        // },
    }
}
