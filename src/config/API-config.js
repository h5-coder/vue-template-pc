// 请求地址
const BASE = process.env.API_ROOT, // http:// 192.168.1.251:8080
    USER_URL = `${BASE}user/`,

    // 用户
    USER = {
        register: `${USER_URL}register`,
        login: `${USER_URL}login`,
        verificationCode: `${USER_URL}validation`,
        baseInfo: `${USER_URL}getUserInfo`,
        getMenuList: `${USER_URL}getMenus`,
        logout: `${USER_URL}logout`
    };
// 登录
export default {
    BASE,
    USER
};
