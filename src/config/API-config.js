// 请求地址
const BASE = process.env.API_ROOT, // http:// 192.168.1.251:8080
    USER_URL = `${BASE}/user/`,

    // 用户
    USER = {
        register: `${USER_URL}register.do`,
        login: `${USER_URL}login.do`,
        verificationCode: `${USER_URL}validation.do`,
        baseInfo: `${USER_URL}getUserInfo.do`,
        getMenuList: `${USER_URL}getMenus.do`,
        logout: `${USER_URL}logout.do`,
    };
// 登录
export default {
    BASE,
    USER,
}