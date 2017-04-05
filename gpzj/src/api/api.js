
import Vue from 'vue';
// const domain = "http://192.168.2.24:9080/";
// const domain = "http://wxtest.hx168.com.cn/";
const domain = "http://k12.iyunbei.com/";

export default {
	get(url, cb, errorCb) {
		Vue.http.get(
			domain+url
			).then(response => {
				cb(response.data)
			}, response => {
				errorCb(response.data);
			});
	},

	// post(url, body, cb, errorCb) {
	// 	Vue.http.get(
	// 		domain+url

	// 		).then(response => {
	// 			console.log(response)
	// 			console.log(response.json())
	// 			cb(response);
	// 		}, response => {
	// 			errorCb(response);
	// 		});
	// }
}




