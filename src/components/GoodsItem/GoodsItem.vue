<template>
  <div class="goodsItem">
    <ul class="imgItem">
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>

      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
      <li>
        <img src="./images/1.png" alt="">
        <span>美食</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
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
