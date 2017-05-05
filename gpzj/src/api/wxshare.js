var wx = require('weixin-js-sdk');
import axios from 'axios';
import { filePath, wechatToken } from './config';

export function shareConfig(configMsg = {}, path = "") {
	var link = encodeURIComponent(`${location.href.split('#')[0]}`);
	var getUrl = `${filePath}weichat/weichat/share/${wechatToken}?url=${link}`;

	axios.get(getUrl).then(response => {
		var opts = {
	    	link: `${filePath}hxwwz/rest/json/gaoshou/info/param/page/index?jump_mode=1&jump=${path}#${path}`,
	        ...configMsg,
	        success: function(data) {
	            
	        }
	    };
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
