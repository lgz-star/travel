<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <home-icons :iconlist="iconlist"></home-icons>
    <home-recommend :recommendlist="recommendlist"></home-recommend>
    <home-weekend :weekendlist="weekendlist"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperlist: [],
      iconlist: [],
      recommendlist: [],
      weekendlist: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperlist = data.swiperList
        this.iconlist = data.iconList
        this.recommendlist = data.recommendlist
        this.weekendlist = data.weekendlist
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
