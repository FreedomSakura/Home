<template>
    <div id="good">
        <GoodsBar>
            <div slot="left" class="goods-bar-left">平台爆款</div>
            <div slot="right" class="goods-bar-right">猜你喜欢></div>
        </GoodsBar>
        <div id="good-list">
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
        height: 300px;

        margin: 0 auto;
    }

    #good-list {
        display: flex;
        flex-wrap: wrap;

        justify-content: space-evenly;
        
        background-color: rgba(0, 0, 0, 0.05);
    }

    .goods-bar-left {
        font-size: 13px;

        position: relative;
        left: 10px;
    }
    .goods-bar-right {
        width: 40px;
        height: 20px;

        font-size: 13px;

        background-color: greenyellow;

        position: absolute;
        right: 0;
    }

</style>