<template>
  <div class="header">
    <div class="heaer-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="heaer-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游园主题
    </div>
    <router-link to="/city">
      <div class="heaer-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varible.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgcolor
    color: #fff
    .heaer-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size: .4rem
    .heaer-input
       flex: 1
       color: #ccc
       line-height: .64rem
       height: .64rem
       margin-top: .12rem
       margin-left: .2rem
       padding-left: .2rem
       background: #FFFFFF
       border-radius: .1rem

    .heaer-right
        min-width: 1.04rem
        padding: 0 .1rem
        float: right
        text-align: center
        color: #fff
        .arrow-icon
          font-size: .24rem
          margin-left: -.04rem
</style>
