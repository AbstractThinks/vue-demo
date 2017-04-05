
import Vue from 'vue';
// const domain = "http://192.168.2.24:9080/";
// const domain = "http://wxtest.hx168.com.cn/";
const domain = "http://k12.iyunbei.com/";
// const domain = "https://ajax.googleapis.com/";
export default {
	get(url, cb, errorCb, resolve) {
		Vue.http.get(
			domain+url
			).then(response => {
				cb(response.data);
				resolve && resolve();
			}, response => {
				errorCb(response.data);
				resolve && resolve();
			});
	},
}




