<template>
  <div>
    <home-header></home-header>
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
import {mapState} from 'vuex'
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
      lastcity: '',
      swiperlist: [],
      iconlist: [],
      recommendlist: [],
      weekendlist: []
    }
  },
  computed: {
    // 映射state中的city
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperlist = data.swiperList
        this.iconlist = data.iconList
        this.recommendlist = data.recommendlist
        this.weekendlist = data.weekendlist
      }
    }
  },
  mounted () {
    this.lastcity = this.city
    this.getHomeInfo()
  },
  // keep-alive不会重新ajax请求
  // 但如果城市改变了，需要重新请求数据
  // activated是页面重新显示都会执行的
  activated () {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
