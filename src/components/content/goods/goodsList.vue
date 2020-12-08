<template>
    <div id="good">
        <GoodsBar class="goods-bar">
            <div slot="left" class="goods-bar-left">平台爆款</div>
            <div slot="right" class="goods-bar-right">猜你喜欢></div>
        </GoodsBar>
        <div class="good-list">
            <GoodsItem v-for="(item, index) in gList" :key="index" :gItem="item"></GoodsItem>
        </div>
    </div>
</template>

<script>
import GoodsItem from './goodsItem'
import GoodsBar from'./goodsBar'

export default {
    name: 'GoodList',
    components: {
        GoodsItem,
        GoodsBar
    },
    props: {
        gList: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
    #good {
        width: 100%;

        margin: 0 auto;
    }

    .goods-bar {
        margin: 10px 0;
    }

    .good-list {
        display: flex;
        flex-wrap: wrap;

        justify-content: space-evenly;

    }

    .goods-bar-left {
        font-size: 14px;

        position: relative;
        left: 10px;
    }
    .goods-bar-right {
        text-align: center;
        padding: 5px 6px;

        font-size: 14px;
        color: white;

        background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
        
        position: absolute;
        right: 10px;

        display: flex;

        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }

</style>