// 引入我们封装的网络模块
import { request1 } from './request'

// 首页轮播图
export function getHomeSwiper() {
    return request1({
        url: '/ushop/macadvertasset/api/getAllHb/1'
    })
}

// 首页分类栏 （10个的）
export function getHomeSCategory() {
    return request1({
        url: '/ushop/prcskukind/api/getAllCdflByParentId'
    })
}

// 首页爆款（商品列表）
export function getHomeGoodsList() {
    return request1({
        url: '/ushop/prcsku/api/getBkPrcSkus'
    })
}

