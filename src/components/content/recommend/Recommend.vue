<template>
    <div class="recommend-rect">
        <img src="~assets/img/common/组21.png" class="slogan">
        <!-- <div class="recommend-text">活动专区</div> -->
        <div class="recommend-list">
            <img src="~assets/img/recommend/组22.png">
            <img src="~assets/img/recommend/组23.png">
            <img src="~assets/img/recommend/组24.png">
            <img src="~assets/img/recommend/组25.png">
        </div>
    </div>
</template>

<script>
import RecommendItem from './RecommendItem'

export default {
    name: 'Recommend',
    components: {
        RecommendItem
    }
}
</script>

<style scoped>
    .recommend-rect {
        margin-bottom: 10px;
    }
    .recommend-text {
        position: relative;
        left: 10px;
        
        font-size: 13px;
    }

    .recommend-list {
        width: 98%;

        margin: 5px auto;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .slogan {
        width: 98%;

        margin-top: 10px;
    }

    .recommend-list img {
        width: 45%;

        margin: 3px 2px;
    }
</style>