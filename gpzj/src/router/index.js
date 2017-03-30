import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hot from '@/components/Hot'
import HotDetail from '@/components/HotDetail'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/index', name: 'index', component: Index },
    { path: '/hot', name: 'hot', component: Hot },
    { path: '/hotdetail/:id', name: 'hotdetail', component: HotDetail },
  ]
})
