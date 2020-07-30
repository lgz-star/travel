<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-bottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="inneritem of item"
               :key="inneritem.id"
          >
            {{inneritem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  watch: {
    // 动态绑定的ref获取的$refs是一个数组
    // 但这里的$ref获取的是一个对象，原因未知
    // 只能使用object.entries转化为数组再使用
    // this.letter和clickkey虽然肉眼相等，但是===为false
    // 解决方法：a.trim()===b.trim():去除周围的空格
    letter () {
      const clickkey = Object.entries(this.$refs)
      for (var i = 1; i < clickkey.length; i++) {
        if (this.letter.trim() === clickkey[i][0][0].trim()) {
          const element = clickkey[i][1][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
  },
  mounted () {
    // 实现滚动
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varible.styl'
  .border-bottom
    &:before
      border-color: #ccc
    &::after
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .44rem
      background: #eee
      padding-left: .26rem
      color: #666
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.3%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left:.2rem
</style>
