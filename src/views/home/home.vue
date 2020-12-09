<template>
    <div id="home">
        <Search></Search>
        <Scroll class="content" ref="scroll">
            <HomeSwiper :swiperData="swiperData" class="home-swiper"></HomeSwiper>
            <SimpleCategory :sCategory="sCategory"></SimpleCategory>
            <div class="area" id="a">
                <Recommend></Recommend>
                <GoodsList :gList="goodsList"></GoodsList>
                <div class="bottomImage">
                    <img src="~assets/img/common/bottomImage.png">
                </div>
                <div class="home-tips">此平台旨在为注册会员提供产品售后及其他增值服务</div>
            </div>
        </Scroll>
    </div>
</template>

<script>
// 组件
// 固定
import Search from 'components/content/search/Search'

// 可滚动
import HomeSwiper from './childComps/homeSwiper'
import { SimpleCategory, SimpleCategoryItem } from 'components/common/simpleCategory'
import Recommend from 'components/content/recommend/Recommend'
import GoodsList from 'components/content/goods/goodsList'

// 网络请求
import { getHomeSwiper, getHomeSCategory, getHomeGoodsList } from 'network/home'

// 滚动模块
import Scroll from 'components/common/scroll/scroll'

// 工具函数
import { debounce } from 'common/utils'

export default {
    name: 'Home',
    components: {
        Search,
        HomeSwiper,
        SimpleCategory,
        Recommend,
        GoodsList,
        Scroll
    },
    data() {
        return {
            // 首页轮播图
            swiperData: [],
            // 首页分类栏
            sCategory: [],
            // 首页爆款
            goodsList: [],
            // 保存防抖处理后的函数（监听图片是否加载完毕）
            itemImgListener: null
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

        // 防抖处理
        let newRefresh = debounce(this.$refs.scroll.refresh, 500)
        // 保存要监听的函数
        this.itemImgListener = () => {
            newRefresh()
        }

        // 监听图片是否加载完全
        this.$bus.$on('imgLoadout', this.itemImgListener)
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
    #home {
        height: 100vh;

        position: relative;
    };

    .area{
        background-color: rgba(0, 0, 0, 0.06);
    }

    #a {
        background-color: rgba(0, 0, 0, 0.06);
    }

    .content {
        height: calc(100% - 47px - 49px);
        overflow: hidden;
    }

    .bottomImage {
        width: 96%;
        margin: 0 auto;
    }
    .bottomImage img {
        width: 100%;

        margin-top: 15px;
    }

    .home-tips {
        width: 96%;

        text-align: center;
        font-size: 9px;

        padding: 46px 0;

        position: relative;
    }
</style>