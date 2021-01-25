import {queryStringify} from './utils';
import {API_URL} from './constants';
import {router, Routes} from '../index';

const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE'
};

export class HTTPTransport {
    private _base: string;
    constructor(base: string) {
    	this._base = base;
    }

	get = (url: string, options: Record<string, any> = {}): any => {
		return this.request(url, {...options, method: METHODS.GET}, options.timeout);
	};

	post = (url: string, options: Record<string, any> = {}) => {
		return this.request(url, {...options, method: METHODS.POST}, options.timeout);
	};

	put = (url: string, options: Record<string, any> = {}) => {
		return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
	};

	delete = (url: string, options: Record<string, any> = {}) => {
		return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
	};

	request = (url: string, options: Record<string, any> = {}, timeout = 5000): Promise<any> => {
		const {headers = {}, method, data} = options;
		url = `${this._base}/${url}`;

		return new Promise(function (resolve, reject) {
			const _reject = (response: any) => {
				alert(JSON.stringify(response));
				return reject(response);
			};

			if (!method) {
				_reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			xhr.withCredentials = true;
			const isGet = method === METHODS.GET;

			xhr.open(method, isGet && Boolean(data) ? `${url}${queryStringify(data)}` : url);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = () => {
				let {response} = xhr;
				try {
					response = JSON.parse(response);
				} catch {}

				if (xhr.status === 200) {
					resolve(response);
				} else if (xhr.status === 401) {
					router.go(Routes.auth);
					_reject(response);
				} else {
					_reject(response);
				}
			};

			xhr.onabort = _reject;
			xhr.onerror = _reject;

			xhr.timeout = timeout;
			xhr.ontimeout = _reject;

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
