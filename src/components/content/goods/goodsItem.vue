<template>
    <div class="good-item">
        <span class="gSpan">
            <img :src="gItem.photoUrl">
        </span>
        <div class="good-item-title">{{ gItem.skuName }}</div>
        <div class="good-item-info">
            <div class="price">{{ gItem.pricePlatform }}</div>
            <img src="~assets/img/common/buy.png">
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
    }
}
</script>

<style scoped>
    .good-item {
        width: 47%;
        height: 200px;

        margin: 3px 0;

        background-color: white;
    }

    .good-item .gSpan{
        width: 70%;
        height: 120px;


        padding-top: 10px;

        display: table-cell;
        text-align: center;
    }
    .good-item .gSpan img{
        height: 120px;
    }

    .good-item-title {
        margin-left: 5px;

        font-size: 14px;
    }

    .good-item-info {
        display: flex; 

        position: relative;
    }

    .good-item-info .price {
        position: absolute;
        left: 0;
    }

    .good-item-info img {
        width: 16px;
        height: 16px;

        position: absolute;
        right: 0;
    }
</style>