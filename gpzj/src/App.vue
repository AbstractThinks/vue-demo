<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" img-set="http://wxtest.hx168.com.cn/hxwwz/rest/json/gaoshou/info/param/page/favicon.ico"></router-view>
  </div>
  
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from './store/mutation-types';
export default {

  name: 'app',
  mounted () {
    // this.getUserInfo();
  },
  methods: {
    ...mapActions({
      getUserInfo: types.USER_INFO_ACTION,
    })
    
  }
}
</script>



























<style lang="scss">
  @import "./assets/css/variable.scss";


  //global
  html,body,#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    .mu-dialog.loading {
      box-shadow:none;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mu-dialog {
      width: 90%;
    }
    .mu-dialog-title {
      justify-content: center;
    }
  }

  @for $i from 1 to 10 {
    .blank#{$i*10} {
      height: #{$i*10}px;
    }
  }
  .hidden {
    display:none!important;
  }
  .none-text {
    color: $grey7;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  body .popup-top{
    width: 80%;
    opacity: .8;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
    background-color: $black;
    color: $white;
  }
</style>
