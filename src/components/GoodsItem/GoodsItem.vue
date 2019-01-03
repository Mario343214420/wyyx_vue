<template>
  <div class="goodsItem">
    <ul class="imgItem">
      <li v-for="(kingKon,index) in kingKongModule.kingKongList" :key="index">
        <img :src="kingKon.picUrl" alt="">
        <span>{{kingKon.text}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['kingKongModule'])
    },
    mounted(){
      this.$store.dispatch('reqkingKongModule');
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .goodsItem
    height px2rem(420)
    background-color: yellowgreen;

    .imgItem
      height 100%
      clearFix()
      li
        float left
        width 20%
        display flex
        flex-direction column
        align-items center
        margin-top px2rem(25)
        >img
          width 80%
          height 80%
          margin 5px 0
        >span
          font-size 14px

</style>
