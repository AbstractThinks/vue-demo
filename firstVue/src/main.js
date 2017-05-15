// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'
// import store from './store/simple';  //vuex 简单例子
import global from './filter/filter'

Vue.config.productionTip = false
Vue.config.debug = true;
/* eslint-disable no-new */

Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

Vue.filter('global', global);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate: function () {
    console.log('beforeCreate 钩子执行...');
    console.log(this.number)
  },
  cteated: function () {
    console.log('cteated 钩子执行...');
    console.log(this.number)
  },
  beforeMount: function () {
    console.log('beforeMount 钩子执行...');
    console.log(this.number)
  },
  mounted: function () {
    console.log('mounted 钩子执行...');
    console.log(this.number)
  },
  beforeUpdate: function () {
    console.log('beforeUpdate 钩子执行...');
    console.log(this.number)
  },
  updated: function () {
    console.log('updated 钩子执行...');
    console.log(this.number)
  },
  beforeDestroy: function () {
    console.log('beforeDestroy 钩子执行...');
    console.log(this.number)
  },
  destroyed: function () {
    console.log('destroyed 钩子执行...');
    console.log(this.number)
  },
})


