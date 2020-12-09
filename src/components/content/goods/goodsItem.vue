<template>
    <div class="good-item">
        <span class="gSpan">
            <img :src="gItem.photoUrl" @load="imgLoad" alt="图片未加载">
        </span>
        <div class="good-item-title">{{ gItem.skuName }}</div>
        <div class="good-item-info">
            <div class="price">￥ {{ gItem.pricePlatform }}</div>
            <span class="image">
                <img src="~assets/img/common/buy.png">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsItem',
    props: {
        gItem: {
            type: Object,
            default: {}
        }
    },
    methods: {
        // 当图片加载完后传递信息
        imgLoad() {
            this.$bus.$emit('imgLoadout')
        }
    }
}
</script>

<style scoped>
    .good-item {
        width: 47%;
        height: 459px;

        margin: 6px 0;

        background-color: white;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .good-item .gSpan{
        width: 100%;
        height: 306.4px;

        display: table-cell;
        text-align: center;
        
    }

    .good-item .gSpan img{
        width: 100%;
        height: 299px;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .good-item-title {
        margin-left: 19px;
        margin-top: 27px;

        font-size: 12px;
        font-weight: bold;
    }

    .good-item-info {
        display: flex; 

        width: 100%;
        height: 40px;
        line-height: 40px;

        margin-top: 40px;

        color: red;

        position: relative;
    }

    .good-item-info .price {
        position: absolute;
        left: 7px;
    }

    .good-item-info .image {
        position: absolute;
        right: 20px;

        display: table-cell;
        text-align: center;
    }

    .good-item-info img {
        width: 37px;
        height: 37px;
    }
</style>