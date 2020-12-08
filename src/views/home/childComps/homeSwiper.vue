<template>
    <!-- <div id="homeSwiper"> -->
        <Swiper class="aSwiper">
            <SwiperItem v-for="(item, index) in swiperData" :key="index">
                <a href="">
                    <img :src="item.assetUrl">
                </a>
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
        width: 94%;

        margin: 0 auto;
    } 

</style>