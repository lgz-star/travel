<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of swiperlist" :key="item.id">
          <img class="swiper-img" :src="item.url" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperlist: Array
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: 'true'
      }
    }
  },
  // 一开始是空数组，加载axios数据后会显示最后一张轮播图
  // v-if判断swiper有数据再加载就不会直接显示最后一张轮播图了
  computed: {
    showSwiper () {
      return this.swiperlist.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  //.wrapper设置宽高比为31.25%
  .wrapper
    width:100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
