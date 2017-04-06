
import Vue from 'vue';
// const domain = "http://192.168.2.24:9080/";
// const domain = "http://wxtest.hx168.com.cn/";
const domain = "http://k12.iyunbei.com/";
// const domain = "https://ajax.googleapis.com/";
export default {
	get(url, cb, errorCb, resolve, reject) {
		Vue.http.get(
			domain+url,
			{emulateJSON: true}
			).then(response => {
				cb(response.data);
				console.log(1);
				resolve && resolve();
			}, response => {
				errorCb(response.data);
				reject && reject(response);
			});
	},
	post(url, params, cb, errorCb, resolve, reject) {
		Vue.http.post(
				domain+url,
				{ params },
				{emulateJSON: true}
			).then(response => {
				cb(response.data);
				console.log(1);
				resolve && resolve();
			}, response => {
				errorCb(response.data);
				reject && reject(response);
			});
	},
}




