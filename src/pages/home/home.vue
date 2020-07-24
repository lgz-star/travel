<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
