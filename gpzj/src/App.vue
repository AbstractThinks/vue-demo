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
    // this.initData();
  },
  methods: {
    // ...mapActions({
    //   getUserInfo: types.USER_INFO_ACTION,
    // }),
    // async initData() {
    //   await this.getUserInfo();
    // }
    
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
      max-width: 100%;
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
 .text-ellipsis {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
  }
  
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .warning {
    color: $red6;
  }

  .color-blue {
    color: $blue!important;
    .mu-flat-button-label {
      color: $blue!important;
    }
    .mu-item {
      .mu-item-content {
        color: $blue!important;
      }
    }
  }
  .color-red {
    color: $primary!important;
    .mu-flat-button-label {
      color: $primary!important;
    }
    .mu-item {
      .mu-item-content {
        color: $primary!important;
      }
    }
  }
  .color-grey7 {
    color: $grey7;
  }
  .font14 {
    font-size: 14px;
  }
  .mu-flexbox {
    .mu-flexbox-item.vertical-item {
        width: 1px;
        min-width: 1px;
    }
    .vertical-border {
        height: 48px;
        border-right: 1px solid rgba(0,0,0,.12);
        width: 1px;
    }
  }
  #app {
    .aplayer{
      margin: 0px;
      .aplayer-info {
        padding: 10px 7px 0 10px;
        .aplayer-music {
          margin: 0px;
          .aplayer-title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: block;
          }
        }
      }
    }
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
  img {
    cursor: -webkit-zoom-in;
  }

  .mu-dialog-body  {
  padding:0px!important;
  h4 {
    font-weight: normal;
  }
  .mu-item {
    padding: 0px 22px;
    .mu-item-content {
      color: $grey7;
    }
  }
  .color-blue {
    .mu-item {
      .mu-item-content {
        color: $blue;
      }
    }
  }
} 
  
  //animation
  .flip-in-x {animation:flipInX 1s 0s 1 both}
  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
  }
  .slide-in-down{animation:slideInDown 0.5s 0s 1 both}
  .slide-in-up{animation:slideInUp 0.5s 0s 1 both}
  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .fade-in-up {animation:fadeInUp 1s 0s 1 both}
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
  .roll-in {animation:fallInX 0.5s 0s 1 both}
  @keyframes fallInX {
  0% {
    opacity: 0;
    transform: translateY(-200px); }

  100% {
    opacity: 1;
    transform: translateY(0); } 
  }
  
  .zoom-in{animation:zoomIn 0.5s 0s 1 both}
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% {
      opacity: 1;
    }
  }
  
  

</style>
