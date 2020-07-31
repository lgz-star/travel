<template>
  <div class="serch">
    <input v-model="keyword" class="serch-input" type="text" placeholder="输入城市名或拼音" />
    <div
      class="serch-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handlecityclick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citysearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handlecityclick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 搜索框为空，不显示列表
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 把某个区域设为滚动状态
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varible.styl'
  .serch
    height: .72rem
    padding: 0 .1rem
    background: $bgcolor
    .serch-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color:#666
    .serch-content
      z-index: 1
      overflow: hidden
      position: absolute
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      background: #eee
      .search-item
        line-height: .62rem
        padding-left: .2rem
        background: #FFF
        color: 666

</style>
