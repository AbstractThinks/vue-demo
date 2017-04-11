<template>
  <div id="app">
    <router-view></router-view>
    <mu-dialog :open="dialog" @close="close" dialogClass="loading">
      <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
  </div>
  
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      dialog: true
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  },
  mounted: function () {
    setTimeout(()=>this.dialog = false, 500)
  },

}
</script>

<style lang="scss">

  html,body,#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    .mu-toast{
      width: 200px;
      left: 50%;
      top: 0;
      bottom: initial;
      margin-left: -100px;
    }
    .mu-dialog.loading {
      background-color: rgba(0,0,0,0);
      text-align: center;
      box-shadow:none;
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
