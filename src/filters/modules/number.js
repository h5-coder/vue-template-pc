import Vue from 'vue';

// 全局过滤器
// 注册
export default Vue.filter('number', function(oldValue) {
    // 返回处理后的值
    let f = parseFloat(oldValue);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(oldValue * 100) / 100;
    let newValue = f.toString();
    let rs = newValue.indexOf('.');

    if (rs < 0) {
        rs = newValue.length;
        newValue += '.';
    }
    while (newValue.length <= rs + 2) {
        newValue += '0';
    }
    return newValue;
});
