<template>
  <div>
    <div class="banner" @click="handlebannerclick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div>
          <span class="iconfont banner-icon">&#xe635;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showgallary"
        @close="handlebannerclose"
      >
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fade/fade'
export default {
  name: 'detailbanner',
  components: {
    commonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showgallary: false
    }
  },
  methods: {
    handlebannerclick () {
      this.showgallary = true
    },
    handlebannerclose () {
      this.showgallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height:0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top: .2rem
        padding: 0 .4rem
        height: .4rem
        line-height: .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, 0.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
