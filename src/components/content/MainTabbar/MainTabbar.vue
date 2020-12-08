<template>
    <Tabbar class="tab-bar">
        <TabbarItem path="/home" activeColor="#d81e06">
            <img slot="item-icon" src="~assets/img/tabbar/首页.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/首页a.svg">
            <div slot="item-text">首页</div>
        </TabbarItem>
        <TabbarItem path="/category" activeColor="#d81e06">
            <img slot="item-icon" src="~assets/img/tabbar/分类.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/分类a.svg">
            <div slot="item-text">u选</div>
        </TabbarItem>
        <TabbarItem path="/cart" activeColor="#d81e06">
            <img slot="item-icon" src="~assets/img/tabbar/购物车.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/购物车a.svg">
            <div slot="item-text">购物车</div>
        </TabbarItem>
        <TabbarItem path="/profile" activeColor="#d81e06">
            <img slot="item-icon" src="~assets/img/tabbar/个人中心.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/个人中心a.svg">
            <div slot="item-text">首页</div>
        </TabbarItem>
    </Tabbar>
</template>

<script>
// 导入
import { Tabbar, TabbarItem } from 'components/common/tabbar'

export default {
    name: 'MainTabbar',
    components: {
        Tabbar,
        TabbarItem
    }
}
</script>

<style scoped>

</style>