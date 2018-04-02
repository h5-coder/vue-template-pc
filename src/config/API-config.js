//请求地址
const BASE = process.env.API_ROOT, //http://192.168.1.251:8080
    USER_URL = `${BASE}/user/`,
    CHAIN_URL = `${BASE}/chain/`,
    NODE_URL = `${BASE}/chainode/`,

    //节点
    NODE = {
        join: `${CHAIN_URL}join.do`,
        getAuditList: `${NODE_URL}getAuditList.do`,
        getList: `${CHAIN_URL}getChainNodes.do`,
        reviewList: `${NODE_URL}getAuditList.do`,
        reviewDetail: `${NODE_URL}getAuditInfo.do`,
        submitReview: `${NODE_URL}submitAudit.do`,
        applicationList: `${NODE_URL}getApplyList.do`,
        applicationDetail: `${NODE_URL}getApplyInfo.do`,
        details: `${NODE_URL}getNodeInfo.do`,
    },

    //链
    CHAIN = {
        create: `${CHAIN_URL}create.do`,
        record: `${CHAIN_URL}getchainRecoders.do`,
        getList: `${CHAIN_URL}getchainsByJoining.do`,
        details: `${CHAIN_URL}getChainInfo.do`,
        joinedList: `${CHAIN_URL}getChainsByJoined.do`,
        getTradingVol: `${CHAIN_URL}getTrading.do`,
        blockTotal: `${CHAIN_URL}getBlocking.do`,
        getManageNode: `${CHAIN_URL}getManageNode.do`,
        getChainNodes: `${CHAIN_URL}getChainNodes.do`
    },

    //用户
    USER = {
        register: `${USER_URL}register.do`,
        login: `${USER_URL}login.do`,
        verificationCode: `${USER_URL}validation.do`,
        baseInfo: `${USER_URL}getUserInfo.do`,
        getMenuList: `${USER_URL}getMenus.do`,
        logout: `${USER_URL}logout.do`,
    };
//登录
export default {
    BASE: BASE,
    NODE: NODE,
    CHAIN: CHAIN,
    USER: USER,
}