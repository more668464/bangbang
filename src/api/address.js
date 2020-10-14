import axios from '@/utils/request'

export function findByCustomerId(params) {
    return axios.get('/address/findByCustomerId', { params })
}