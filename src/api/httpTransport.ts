// @ts-nocheck
import {queryStringify} from './utils.js';
import {API_URL} from './constants.js';
import {router, Routes} from '../index.js';

const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

export class HTTPTransport {
	constructor(base) {
		this._base = base;
	}
	get = (url, options = {}): any => {
		return this.request(url, {...options, method: METHODS.GET}, options.timeout);
	};

	post = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.POST}, options.timeout);
	};

	put = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
	};

	delete = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
	};

	request = (url, options = {}, timeout = 5000): Promise<any> => {
		const {headers = {}, method, data} = options;
		url = `${this._base}/${url}`;

		return new Promise(function (resolve, reject) {
			if (!method) {
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			xhr.withCredentials = true;
			const isGet = method === METHODS.GET;

			xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

			Object.keys(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = () => {
				if (xhr.status === 200) {
					resolve(xhr.response);
				} else if (xhr.status == 401) {
					router.go(Routes.auth);
					reject(xhr.response);
				} else {
					reject(xhr.response);
				}
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			if (isGet || !data) {
				xhr.send();
			} else if (data instanceof FormData) {
				xhr.send(data);
			} else {
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.send(JSON.stringify(data));
			}
		});
	};
}

export const api = new HTTPTransport(API_URL);
