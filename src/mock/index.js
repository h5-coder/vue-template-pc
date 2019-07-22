import Mock from 'mockjs';
import './modules/user/login.js';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
    timeout: '200 - 400'
});
