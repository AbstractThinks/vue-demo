var wx = require('weixin-js-sdk');
import axios from 'axios';
import { filePath, wechatToken } from './config';

export function shareConfig(configMsg = {}, path = "", user = {}) {
	var link = encodeURIComponent(`${location.href.split('#')[0]}`);
	var getUrl = `${filePath}weichat/weichat/share/${wechatToken}?url=${link}`;
	var khstr = "";
	if (user.firstData) {
		// 登陆用户
		khstr = `jkhid=${user.firstData.khbh}&broker=${user.firstData.broker_code}&package=${user.firstData.package}&`;
	} else {
		// 未登陆用户
		khstr = user
	}

	var sharelink = `${filePath}hxwwz/rest/json/gaoshou/info/param/page/index?${khstr}jump_mode=1&jump=${path}#${path}`;
	axios.get(getUrl).then(response => {
		var opts = {
	    	link: sharelink,
	        ...configMsg,
	        success: function(data) {
	            
	        }
	    };
	    // console.log(opts)
	    var configData = eval('(' + response.data + ')');
	    var wxconfig = {
	    	debug: false,
	    	...configData.data,
	    	jsApiList:[
	    		"onMenuShareTimeline",
	    		"onMenuShareAppMessage",
	    		"onMenuShareQQ",
	    		"onMenuShareWeibo"
	    	]
	    }
		wx.config(wxconfig);
		wx.ready(function() {

		    // 分享到朋友圈
		    wx.onMenuShareTimeline(opts);
		    // 分享给朋友
		    wx.onMenuShareAppMessage(opts);
		    wx.onMenuShareQQ(opts);
		    wx.onMenuShareWeibo(opts);
		    //wx.showAllNonBaseMenuItem();
		});
		wx.error(function(res) {
			console.log(res)
		    // alert('error:'+JSON.string(res));
		});

	});
}
