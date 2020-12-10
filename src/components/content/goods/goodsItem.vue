<template>
    <div class="good-item">
        <span class="gSpan">
            <img :src="gItem.photoUrl" @load="imgLoad"  :onerror="errorimg" >
        </span>
        <div class="good-item-title">{{ gItem.skuName }}</div>
        <div class="good-item-info">
            <div class="currency">￥</div>
            <div class="price">{{ gItem.pricePlatform }}</div>
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
    data() {
        return {
            errorimg:'this.src="'+require('assets/img/common/error.png')+'"'
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
        width: 46%;
        height: 14rem;

        margin: 0.25rem 0;

        background-color: white;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .good-item .gSpan{
        width: 100%;
        height: 306.4px;

        display: table-cell;
        text-align: center;

        display: block;
    }

    .good-item .gSpan img{
        width: 100%;
        height: 299px;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .good-item-title {
        margin-left: 0.55rem;
        margin-top: 0.7rem;

        font-size: 0.8rem;
    }

    .good-item-info {
        display: flex; 

        width: 100%;
        height: 40px;
        line-height: 40px;

        margin-top: 0.9rem;

        color: red;

        position: relative;
    }

    .good-item-info .currency {
        margin-left: 0.5rem;
        margin-right: 0.3rem;

        font-size: 0.4rem;
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

    /* img:before {
    content: ' ';
    display: block;
    position: absolute;
    height: 299px;
    width: 100%;
    background-image: url(~assets/img/common/error.png);
    } */
</style>