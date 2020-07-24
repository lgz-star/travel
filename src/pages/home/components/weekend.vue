<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendlist" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgurl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendlist: [{
        id: '001',
        imgurl: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '清远周边逛',
        desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
      }, {
        id: '002',
        imgurl: 'https://imgs.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州必打卡',
        desc: '感受现代与传统相融合的广州'
      }, {
        id: '003',
        imgurl: 'https://imgs.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '阳江温泉知多少',
        desc: '这里的天空和大海让人心旷神怡，配上舒缓的优美音乐，泡个暖暖的温泉岂不美哉'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem         // 缩进
    background: #ee
  .item-img-wapper
    overflow: hidden
    height:0
    padding-bottom: 33.9%
  .item-img
    width: 100%
  .item-info
    flex: 1
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      width: 4rem
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
