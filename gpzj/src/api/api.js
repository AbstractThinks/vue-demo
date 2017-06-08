
import Vue from 'vue';
import axios from 'axios';
import { filePath } from './config';

// const domain = "http://192.168.2.108:8050/";
const domain = "/";
// const domain = filePath;


export default {
	get(url, cb, errorCb, resolve, reject) {
		axios.get(domain+url).then(response => {
				cb(response.data);
				resolve && resolve(response);
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




