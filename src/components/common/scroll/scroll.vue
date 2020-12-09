<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// 引入滚动模块
import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        //1、创建滚动对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: 2
        })

        //2、监听滚动
        this.scroll.on('scroll', () => {
            //console.log(this.scroll)
        })
    },
    methods: {
        // 封装一些方法
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>