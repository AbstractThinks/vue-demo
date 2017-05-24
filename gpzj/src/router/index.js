import Router from 'vue-router';
// public
import Error from '@/components/public/Error';

// 新股
import NewStockDetail from '@/components/newStock/NewStockDetail';
import NewStockIndex from '@/components/newStock/NewStockIndex';
import NewStockList from '@/components/newStock/NewStockList';
import NewStockRule from '@/components/newStock/NewStockRule';
//盘前股讯
import RecommendMorning from '@/components/recommend/Morning';
import RecommendAfternoon from '@/components/recommend/Afternoon';


import { shareConfig } from '../api/wxshare';
import { sharelocation } from '../api/config'


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
	    title: '新股申购提醒',
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
    { 
        path: '/recommend/morning/:id', 
        name: 'recommendmorning', 
        meta: {
            title: '股票专家',
            desc: "新股申购技巧,2017超火的投资项目,三天让你学会抓牛股",
            imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
        },
        component: RecommendMorning 
    },
    { 
        path: '/recommend/afternoon/:id', 
        name: 'recommendafternoon', 
        meta: {
            title: '股票专家',
            desc: "新股申购技巧,2017超火的投资项目,三天让你学会抓牛股",
            imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png",
        },
        component: RecommendAfternoon
    },
  ]
});
// router.beforeEach(({meta, path}, from, next) => {　　
//     if (path == "/newstock/list") {
//         // shareConfig(meta, path);
//     } else {
        
//     }
//     next();
    
// })
 
export default router
