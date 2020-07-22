<template>
  <div class="icons">
    <div class="icon" v-for="item of iconlist"
         :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.url" />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconlist: [{
        id: '0001',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0002',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0003',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0004',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0005',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0006',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0007',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0008',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varible.styl'
  //最外层div(.icons)依然用来控制宽高比
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position:absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darktextcolor
        text-align: center
</style>
