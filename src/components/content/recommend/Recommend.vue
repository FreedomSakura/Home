<template>
    <div class="recommend-rect">
        <img src="~assets/img/common/首页slogan.png" class="slogan">
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

    .recommend-list {
        width: 98%;

        margin: 0 auto;
        margin-bottom: 5px;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .slogan {
        width: 100%;
    }

    .recommend-list img {
        width: 47%;
        height: 4.88rem;

        margin: 5px 3px;
    }
</style>