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
Vue.use(require('vue-wechat-title'));

const router = new Router({
  routes: [

    { path: '/error', name: 'error', component: Error },
    // 新股
    { 
	    path: '/newstock', 
	    name: 'newstockindex', 
	    meta: {
	      title: '新股首页'
	    },
	    component: NewStockIndex 
	},
    { 
    	path: '/newstock/index', 
    	name: 'newstockindex', 
    	meta: {
	      title: '新股首页'
	    },
    	component: NewStockIndex 
    },
    { 
    	path: '/newstock/list', 
    	name: 'newstocklist', 
    	meta: {
	      title: '新股列表'
	    },
    	component: NewStockList 
    },
    { 
    	path: '/newstock/rule', 
    	name: 'newstockrule', 
    	meta: {
	      title: '打新规则'
	    },
    	component: NewStockRule 
    },
    { 
    	path: '/newstock/detail/:id', 
    	name: 'newstockdetail', 
    	meta: {
	      title: '新股详情'
	    },
    	component: NewStockDetail 
    },
  ]
});

export default router
