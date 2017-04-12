import Vue from 'vue';
import Router from 'vue-router';

// public
import Error from '@/components/public/Error';

// 新股
import NewStockDetail from '@/components/newStock/NewStockDetail';
import NewStockIndex from '@/components/newStock/NewStockIndex';
import NewStockList from '@/components/newStock/NewStockList';
import NewStockRule from '@/components/newStock/NewStockRule';
import { shareConfig } from '../api/wxshare.js'

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
	      title: '新股申购',
        desc: "新股申购是股市中风险最低而收益稳定的投资方式。",
        imgUrl: "../assets/img/layer-share-logo.png",
	    },
	    component: NewStockIndex 
	},
    { 
    	path: '/newstock/index', 
    	name: 'newstockindex', 
    	meta: {
	      title: '新股申购',
        desc: "新股申购是股市中风险最低而收益稳定的投资方式。",
        imgUrl: "../assets/img/layer-share-logo.png",
	    },
    	component: NewStockIndex 
    },
    { 
    	path: '/newstock/list', 
    	name: 'newstocklist', 
    	meta: {
	      title: '新股发行一览',
        desc: "从《公司法》、《证券法》的规定来看，股份的发行可分为设立发行、改组发行及新股发行等若干种不同的发行。",
        imgUrl: "../assets/img/layer-share-logo.png",
	    },
    	component: NewStockList 
    },
    { 
    	path: '/newstock/rule', 
    	name: 'newstockrule', 
    	meta: {
	      title: '学新规',
        desc: "2016新股新“玩法”有什么要点？",
        imgUrl: "../assets/img/layer-share-logo.png",
	    },
    	component: NewStockRule 
    },
    { 
    	path: '/newstock/detail/:id', 
    	name: 'newstockdetail', 
    	meta: {
	      title: '新股详情',
        desc: "新股申购技巧,2017超火的投资项目,三天让你学会抓牛股",
        imgUrl: "../assets/img/layer-share-logo.png",
	    },
    	component: NewStockDetail 
    },
  ]
});
router.beforeEach(({meta, path}, from, next) => {　　
    // console.log(meta)
    shareConfig(meta);

// 　　const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象

// 　　var isLogin = Boolean(store.state.user.id)    // true用户已登录， false用户未登录　
// 　　
// 　　if (auth  &&  !isLogin  &&  path !== '/login') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
// 　　　　return next({ path: '/login' })   //  跳转到login页面
// 　　}


　　next()   // 进行下一个钩子函数
})
export default router
