<template>
    <!-- <div id="homeSwiper"> -->
        <Swiper class="aSwiper">
            <SwiperItem v-for="(item, index) in swiperData" :key="index">
                    <img :src="item.assetUrl">
            </SwiperItem>
        </Swiper>
    <!-- </div> -->
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
    name: 'HomeSwiper',
        components: {
        Swiper,
        SwiperItem
    },
    props: {
        swiperData: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
    .aSwiper {
        width: 93%;
        height: 6.5rem;

        margin: 0 auto;

        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    } 

</style>