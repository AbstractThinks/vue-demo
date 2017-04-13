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
        desc: "今日新股申购提醒：XX新股（300XXX），XX新股（300XXX）",
        imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
	    },
	    component: NewStockIndex 
	},
    { 
    	path: '/newstock/index', 
    	name: 'newstockindex', 
    	meta: {
	    title: '新股申购',
        desc: "今日新股申购提醒：XX新股（300XXX），XX新股（300XXX）",
        imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
	    },
    	component: NewStockIndex 
    },
    { 
    	path: '/newstock/list', 
    	name: 'newstocklist', 
    	meta: {
	    title: '新股发行一览',
        desc: "今日新股申购提醒：XX新股（300XXX），XX新股（300XXX）",
        imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
	    },
    	component: NewStockList 
    },
    { 
    	path: '/newstock/rule', 
    	name: 'newstockrule', 
    	meta: {
	      title: '学新规',
        desc: "2016新股新“玩法”有什么要点？",
        imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
	    },
    	component: NewStockRule 
    },
    { 
    	path: '/newstock/detail/:id', 
    	name: 'newstockdetail', 
    	meta: {
	    title: '新股详情',
        desc: "新股申购技巧,2017超火的投资项目,三天让你学会抓牛股",
        imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
	    },
    	component: NewStockDetail 
    },
  ]
});
router.beforeEach(({meta, path}, from, next) => {　　
    // window.location.href = window.link = `http://wxtest.hx168.com.cn/hxwwz/rest/json/gaoshou/info/param/page/index#/newstock/list`;

    if (path==="/newstock/list" || path === "/newstock/rule" || path.indexOf("/newstock/detail/") > -1) {
        shareConfig(meta,path);
    }
    

// 　　const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象

// 　　var isLogin = Boolean(store.state.user.id)    // true用户已登录， false用户未登录　
// 　　
// 　　if (auth  &&  !isLogin  &&  path !== '/login') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
// 　　　　return next({ path: '/login' })   //  跳转到login页面
// 　　}


　　next()   // 进行下一个钩子函数
})
// router.afterEach((route) => {
//     // console.log(route)
//     // setTimeout(() => {
//     //     if (route.path==="/newstock/list" || route.path === "/newstock/rule" || route.path.indexOf("/newstock/detail/") > -1) {
//     //         shareConfig(route.meta);
//     //     }
//     // }, 100);
    
//     // console.log(location.href);
//     // shareConfig(route.meta);
//     // console.log(route)
//   // next()
// })
export default router
