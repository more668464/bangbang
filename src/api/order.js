import axios from '@/utils/request';

//根据id/状态查找订单信息
export function orderQuery(params) {
    return axios.get('/order/query', { params })
}

//分页查找信息
export function queryPage(params) {
    let obj = { ...params };
    obj.page--;
    return axios.post('/order/queryPage', obj)
}

//订单总数据
export function findAll() {
    return axios.get('/order/findAll')
}

//根据id查询订单的详细信息
export function findById(params) {
    return axios.get('/order/findById', { params })
}

//派单
export function sendOrder(params) {
    return axios.get('/order/sendOrder', { params })
}
//取消派单
export function cancelSendOrder(params) {
    return axios.get('/order/cancelSendOrder', { params })
}
//服务完成
export function serviceCompleteOrder(params) {
    return axios.get('/order/serviceCompleteOrder', { params })
}

//确认订单
export function confirmOrder(params) {
    return axios.get('/order/confirmOrder', { params })
}