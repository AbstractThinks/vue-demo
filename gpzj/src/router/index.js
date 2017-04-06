import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hot from '@/components/hot/HotList'
import HotDetail from '@/components/hot/HotDetail'


import NewStockDetail from '@/components/newStock/NewStockDetail'
import NewStockIndex from '@/components/newStock/NewStockIndex'
import NewStockList from '@/components/newStock/NewStockList'
import NewStockRemind from '@/components/newStock/NewStockRemind'
import NewStockRule from '@/components/newStock/NewStockRule'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/', name: 'index', component: Index },
    // { path: '/index', name: 'index', component: Index },
    // { path: '/hotlist', name: 'hotlist', component: Hot },
    // { path: '/hotdetail/:id', name: 'hotdetail', component: HotDetail },


    { path: '/newstock/index', name: 'newstockindex', component: NewStockIndex },
    { path: '/newstock/list', name: 'newstocklist', component: NewStockList },
    { path: '/newstock/remind', name: 'newstockremind', component: NewStockRemind },
    { path: '/newstock/rule', name: 'newstockrule', component: NewStockRule },
    { path: '/newstock/detail/:id', name: 'newstockdetail', component: NewStockDetail },
  ]
})
