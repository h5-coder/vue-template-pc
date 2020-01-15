import Mock from "mockjs";
/**
 * @description mock数据返回的结构体，
 * @param {*} [data={}] 具体业务数据
 * @param {number} [code=0] 非必传，默认成功
 * @param {string} [message='success'] 非必传，默认成功
 * @returns
 */
const response = (data = {}, code = 0, message = 'success') => {
    data = Mock.mock(data);

    return {
        data,
        code,
        message
    };
};
export default response;
