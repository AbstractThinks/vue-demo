<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" img-set="http://wxtest.hx168.com.cn/hxwwz/rest/json/gaoshou/info/param/page/favicon.ico"></router-view>
    <!-- <mu-dialog :open="dialog" @close="close" dialogClass="loading">
      <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog> -->
  </div>
  
</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="scss">

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
  }

  @for $i from 1 to 10 {
    .blank#{$i*10} {
      height: #{$i*10}px;
    }
  }

  .none-text {
    color: #999999;
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
</style>
