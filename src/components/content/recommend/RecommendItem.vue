<template>
    <div class="recommend-item">
        <img src="~assets/img/333.jpg">
    </div>
</template>

<script>
export default {
    name: 'RecommendItem',

}
</script>

<style scoped>
    .recommend-item {
        width: 45%;
        height: 85px;

        margin: 3px 2px;

        background-color: blue;

        display: flex;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .recommend-item-text {
        width: 40%;

        margin: 0 10px;
        
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
    }
    .recommend-item-text .title {
        font-size: 14px;
    }
    .recommend-item-text .text {
        font-size: 11px;
    }

    .recommend-item img {
        width: 45%;
        height: 100%;

        background-position: cover;
    }
</style>