<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendlist" :key="item.id">
        <img class="item-img" :src="item.imgurl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendlist: [{
        id: '001',
        imgurl: 'https://imgs.qunarzz.com/sight/p0/2006/55/55f6406af2a258b2a3.water.jpg_200x200_87f21a01.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }, {
        id: '002',
        imgurl: '//img1.qunarzz.com/sight/p0/2007/e0/e0f18647b7978fa0a3.water.jpg_256x160_02660207.jpg',
        title: '长隆水上乐园',
        desc: '全球必去的水上乐园'
      }, {
        id: '003',
        imgurl: '//img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_256x160_f546c33b.jpg',
        title: '深圳欢乐谷',
        desc: '狂欢无罪，够胆你就来'
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
  .item
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .2rem
        background: #ff9300
        padding:0 .1rem
        border-radius: .06rem
        color:#fff

</style>
