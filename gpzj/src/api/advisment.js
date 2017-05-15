
export const advertises = {
	"columnHeader":[{
		"name":"热门服务",
		"icon":"",
		"tabValue": "tab1"
	},{
		"name":"教你炒股",
		"icon":"",
		"tabValue": "tab2"
	},{
		"name":"积分福利",
		"icon":"",
		"tabValue": "tab3"
	}],
	"columnContent":[{
		"tabValue": "tab1",
		"lists":[{
			"url":"/hxwwz/rest/json/gaoshou/info/param/page/hot_detail?t=hot_detail&articleid=3022&channel=newstock_list",
			"title":"抓热点:<span style='color:#c52728'>机会或是跌出来的</span>",
			"describeText":"<span style='font-size:13px;'>本期精选</span><span style='color:#c52728;font-size:13px;'>2只调整或到位的……</span>",
			"iconUrl":"http://r0.hx168.com.cn/gpzj/img/v4/icon-hot-1.png",
			"btnText":"阅读",
			"primary":true,
			"secondary":false,
		},{
			"url":"/hxwwz/rest/json/gaoshou/info/param/page/article_detail?t=article_detail&articleid=2700&channel=newstock_list",
			"title":`“<span style='color:#c52728'>抓热点</span>”服务将全面启动`,
			"describeText":"<span style='font-size:13px;'>一旦发现热点题材，第一时间告知您</span>",
			"iconUrl":"http://r0.hx168.com.cn/gpzj/img/v4/icon-hot-2.png",
			"btnText":"查看",
			"primary":false,
			"secondary":true,
		}]
	},{
		"tabValue": "tab2",
		"lists":[{
			"url":"/hxwwz/rest/json/gaoshou/info/param/page/article_detail?t=article_detail&articleid=2908&channel=newstock_list",
			"title":"经典K线组合：旭日东升",
			"describeText":"<span style='color:#c52728;font-size:13px;'>常见的见底回升信号</span>",
			"iconUrl":"http://r0.hx168.com.cn/gpzj/img/v4/icon-secret.png?v=1.2",
			"btnText":"阅读",
			"primary":false,
			"secondary":true,
		},{
			"url":"/hxwwz/rest/json/gaoshou/info/param/page/article_detail?t=article_detail&articleid=2907&channel=newstock_list",
			"title":"中证流通指数",
			"describeText":"<span style='color:#c52728;font-size:13px;'>上证指数失真时或许可以看它</span>",
			"iconUrl":"http://r0.hx168.com.cn/gpzj/img/v4/icon-secret2.png?v=1.2",
			"btnText":"阅读",
			"primary":false,
			"secondary":true,
		}]
	},{
		"tabValue": "tab3",
		"lists":[{
			"url":"/hxwwz/rest/json/gaoshou/info2/param/page/hxaccount_more?channel=newstock_list",
			"title":"立即领取：新开户获100积分",
			"describeText":"<span style='color:#c52728;font-size:13px;'>可用作兑换金股、计划、文章福利</span>",
			"iconUrl":"http://r0.hx168.com.cn/gpzj/img/v4/icon-coin-big.png?v=1.2",
			"btnText":"领取",
			"primary":true,
			"secondary":false,
		}]
	}]

}

