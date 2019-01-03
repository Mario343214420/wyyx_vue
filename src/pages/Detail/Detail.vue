<template>
  <div class="wrap">
    <ShiwuHeader/>
    <!--<ShiwuGuide/>-->
    <div class="tab">
      <div class="tab-item" :class="{on:$route.path==='/detail/recommend'}">
        <router-link to="/detail/recommend" replace>推荐</router-link>
      </div>
      <div class="tab-item" :class="{on:$route.path==='/detail/master'}">
        <router-link to="/detail/master" replace>达人</router-link>
      </div>
      <div class="tab-item" :class="{on:$route.path==='/detail/show'}">
        <router-link to="/detail/show" replace>晒单</router-link>
      </div>
      <div class="tab-item" :class="{on:$route.path==='/detail/upnew'}">
        <router-link to="/detail/upnew" replace>上新</router-link>
      </div>
      <div class="tab-item" :class="{on:$route.path==='/detail/d_home'}">
        <router-link to="/detail/d_home" replace>Home</router-link>
      </div>

    </div>

    <keep-alive>
      <router-view/>
    </keep-alive>




    <goTop/>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader.vue'
  //  import ShiwuGuide from '../../components/ShiwuGuide/ShiwuGuide.vue'



  import goTop from '../../components/goTop/goTop.vue'
  export default {
    name: "Detail",

    data(){
      return {
        loginWay: null,


      }
    },
    computed: {
      ...mapState(['detail'])
    },
    mounted () {
      this.$store.dispatch('getDetail')
      new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1.15,
        centeredSlides: true,
        onInit: function (swiper) {
          swiper.slides[1].className = 'swiper-slide swiper-slide-active'
        },
        autoplay: {
          autoplay: true,
          delay: 3000
        },
      })
    },
    watch: {
      detail(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1.15,
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay: {
              autoplay: true,
              delay: 3000
            },
          })
        })
      }
    },
    methods: {},
    components: {
      ShiwuHeader,
      goTop,

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';

  .wrap {
    background: #F4F4F4;
    padding-bottom: 90/@rem;
  }

  .tab {
    position: fixed;
    top: 88/@rem;
    z-index: 99;
    background-color: #fff;
    width: 100%;
    height: 65/@rem;
    line-height: 65/@rem;
    border-top: 1px solid #aaa;

    border-bottom: 4px solid #aaa;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .tab-item {
      float: left;
      font-size: .40rem;

      &.on {

        border-bottom: 4px solid #b4282d;
        a {
          color: #b4282d;
        }
      }

    }

  }


</style>
