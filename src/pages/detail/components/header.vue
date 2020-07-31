<template>
  <div>
    <router-link
      tag="div" to="/"
      class="header-abs"
      v-show="showABS"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showABS"
      :style="opacitystyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  data () {
    return {
      showABS: true,
      opacitystyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handlescroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacitystyle = {opacity}
        this.showABS = false
      } else {
        this.showABS = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handlescroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varible.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    line-height: .8rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #FFF
      font-size: .4rem
  .header-fixed
    z-index: 1
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    overflow: hidden
    height1: .86rem
    line-height: .86rem
    text-align: center
    color: #FFFFFF
    background: $bgcolor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
