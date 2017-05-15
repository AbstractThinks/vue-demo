// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Router from 'vue-router';
import Vuex from 'vuex';
import store from './store/index';
import MuseUI from 'muse-ui';
import { dateFormat } from './filter/filter';
import './assets/css/iconfont.css';
import './assets/css/muse-ui.css';
import './assets/css/theme-gpzj.css';

Vue.use(Vuex);
Vue.use(MuseUI);
Vue.use(Router);
Vue.use(require('vue-wechat-title'));

Vue.filter('dateFormat', dateFormat);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
