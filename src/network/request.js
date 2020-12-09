// 引入网络请求模块
import axios from 'axios'

export function request1(config) {
    // 实例化axios对象
    const instance = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        timeout: 5000
    })

    // // 请求拦截器
    // instance.interceptors.request.use(config => {
    //     console.log('请求拦截成功')
    //     return config
    // }, err => {
    //     console.log(err)
    // })

    return instance(config)
}