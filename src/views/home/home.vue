<template>
    <div id="home-move">
        <HomeSwiper :swiperData="swiperData" class="home-swiper"></HomeSwiper>
        <SimpleCategory :sCategory="sCategory"></SimpleCategory>
        <div class="gray-area">
            <Recommend></Recommend>
            <GoodsList :gList="goodsList"></GoodsList>
        </div>
    </div>
</template>

<script>
// 组件
import HomeSwiper from './childComps/homeSwiper'
import { SimpleCategory, SimpleCategoryItem } from 'components/common/simpleCategory'
import Recommend from 'components/content/recommend/Recommend'
import GoodsList from 'components/content/goods/goodsList'

// 网络请求
import { getHomeSwiper, getHomeSCategory, getHomeGoodsList } from 'network/home'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        HomeSwiper,
        SimpleCategory,
        Recommend,
        GoodsList
    },
    data() {
        return {
            // 首页轮播图
            swiperData: [],
            // 首页分类栏
            sCategory: [],
            // 首页爆款
            goodsList: [],
        }
    },
    mounted() {
        // 网络请求
        // 获得首页轮播图
        this.getHomeSwiperH()
        // 获得分类
        this.getHomeSCategoryH()
        // 首页爆款
        this.getHomeGoodsListH()
    },
    methods: {
        // 首页轮播图
        getHomeSwiperH() {
            getHomeSwiper().then(res =>{
                this.swiperData = res.data.data
            })
       },
       // 首页分类栏
       getHomeSCategoryH() {
           getHomeSCategory().then(res => {
               this.sCategory = res.data.data
           })
       },
       // 首页爆款（商品列表）
       getHomeGoodsListH() {
           getHomeGoodsList().then(res => {
               console.log(res)
               this.goodsList = res.data.data
           })
       }
   }
}
</script>

<style scoped>
    .home-swiper {
        height: 105.75px;
    }
    .gray-area {
        background-color: rgba(0, 0, 0, 0.05)
    }
</style>