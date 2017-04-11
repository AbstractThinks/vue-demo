import Vue from 'vue'
import Router from 'vue-router'

// public
import Error from '@/components/public/Error'

// 新股
import NewStockDetail from '@/components/newStock/NewStockDetail'
import NewStockIndex from '@/components/newStock/NewStockIndex'
import NewStockList from '@/components/newStock/NewStockList'
import NewStockRule from '@/components/newStock/NewStockRule'

Vue.use(Router);
router.beforeEach(({meta, path}, from, next) => {

});
const router = new Router({
  routes: [

    { path: '/error', name: 'error', component: Error },
    // 新股
    { path: '/newstock', name: 'newstockindex', component: NewStockIndex },
    { path: '/newstock/index', name: 'newstockindex', component: NewStockIndex },
    { path: '/newstock/list', name: 'newstocklist', component: NewStockList },
    { path: '/newstock/rule', name: 'newstockrule', component: NewStockRule },
    { path: '/newstock/detail/:id', name: 'newstockdetail', component: NewStockDetail },
  ]
})
export default router
