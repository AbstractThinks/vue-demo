
import Vue from 'vue';
import axios from 'axios';
import { filePath } from './config';
// const domain = "http://192.168.2.130:9080/";
// const domain = "http://192.168.2.118:9080/";
// const domain = "http://wxtest.hx168.com.cn/";
const domain = filePath;
// const domain = "http://r0.hx168.com.cn/";

export default {
	get(url, cb, errorCb, resolve, reject) {
		axios.get(domain+url).then(response => {
				cb(response.data);
				resolve && resolve();
			}, response => {
				errorCb(response.data);
				reject && reject(response);
			})

	},
	post(url, params, cb, errorCb, resolve, reject) {

		axios.post(domain+url,{ params }).then(response => {
				cb(response.data);
				resolve && resolve();
			}, response => {
				errorCb(response.data);
				reject && reject(response);
			})
	},
}




