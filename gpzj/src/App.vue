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
    .blur {
      filter: blur(4px);
    }
    .mu-dialog.loading {
      box-shadow:none;
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.52);
    }
    .mu-dialog {
      width: 90%;
    }
    .mu-dialog-title {
      justify-content: center;
    }
    .mu-dialog {
      .dialog-title {
        font-size: 18px;
        font-weight: border;
        color: $blue;
      }
      .dialog-content {
        font-size: 14px;
        color: $grey9;
      }
      .dialog-action {
        button {
          width: 80%;
          border-radius: 24px;
          height: 40px;
          line-height: 40px;
        }
        
      }
      
    }
    .share-dialog {
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      position: relative;
      #qrcode {
        width:200px;
        height: 200px;
      }
      .mu-dialog-body {
        height: 100%;
        color: $white;
        padding: 0px;
        .navbar {
          background: $black;
        }
        header {
          position: absolute;
          width: 100%;
          top: 0px;
          font-weight: bolder;
        }
        article {
          display: flex;
          font-size: 18px;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: bolder;
          .desc {
            font-size: 14px;
            font-weight: normal;
          }
        }
        footer {
          position: absolute;
          width: 100%;
          bottom: 0px;
          font-size: 12px;
          letter-spacing: 8px;
          img {
            width: 80px
          }
        }
        .share-arrow {
          position: absolute;
          width: 80px;
          right: 8px;
          top: 0px;
        }
      }
      
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
  .fade-out-up{animation:fadeOutUp 0.5s 0s 1 both}
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
    
  

</style>
