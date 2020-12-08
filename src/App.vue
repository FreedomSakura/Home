<template>
  <div id="app">
    <Search></Search>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
// 组件
import MainTabbar from 'components/content/MainTabbar/MainTabbar'
import Search from 'components/content/search/Search'

export default {
  name: 'App',
  components: {
    MainTabbar,
    Search
  }
}
</script>

<style scoped>
  @import "~assets/css/base.css";

  
</style>
