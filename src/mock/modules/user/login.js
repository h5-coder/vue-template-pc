import Mock from 'mockjs';
import API from '@/config/api-config';
import response from '../../response';

const vCode = '123456';

function login(prarms) {
    const prarmsObj = JSON.parse(prarms.body);
    if (prarmsObj.code === vCode) {
        return response();
    } else {
        return response({}, 2, '验证码有误，登录失败');
    }
};

// Mock.mock( url, post/get , 返回的数据);
Mock.mock(API.USER.login, 'post', login); // 登录
