var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-nocheck
import { queryStringify } from './utils.js';
import { API_URL } from './constants.js';
import { router, Routes } from '../index.js';
var METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
var HTTPTransport = /** @class */ (function () {
    function HTTPTransport(base) {
        var _this = this;
        this.get = function (url, options) {
            if (options === void 0) { options = {}; }
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.GET }), options.timeout);
        };
        this.post = function (url, options) {
            if (options === void 0) { options = {}; }
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.POST }), options.timeout);
        };
        this.put = function (url, options) {
            if (options === void 0) { options = {}; }
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.PUT }), options.timeout);
        };
        this.delete = function (url, options) {
            if (options === void 0) { options = {}; }
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.DELETE }), options.timeout);
        };
        this.request = function (url, options, timeout) {
            if (options === void 0) { options = {}; }
            if (timeout === void 0) { timeout = 5000; }
            var _a = options.headers, headers = _a === void 0 ? {} : _a, method = options.method, data = options.data;
            url = _this._base + "/" + url;
            return new Promise(function (resolve, reject) {
                var _reject = function (response) {
                    alert(JSON.stringify(response));
                    return reject(response);
                };
                if (!method) {
                    _reject('No method');
                    return;
                }
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                var isGet = method === METHODS.GET;
                xhr.open(method, isGet && !!data ? "" + url + queryStringify(data) : url);
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
                xhr.onload = function () {
                    var response = xhr.response;
                    try {
                        response = JSON.parse(response);
                    }
                    catch (_a) { }
                    if (xhr.status === 200) {
                        resolve(response);
                    }
                    else if (xhr.status == 401) {
                        router.go(Routes.auth);
                        _reject(response);
                    }
                    else {
                        _reject(response);
                    }
                };
                xhr.onabort = _reject;
                xhr.onerror = _reject;
                xhr.timeout = timeout;
                xhr.ontimeout = _reject;
                if (isGet || !data) {
                    xhr.send();
                }
                else if (data instanceof FormData) {
                    xhr.send(data);
                }
                else {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify(data));
                }
            });
        };
        this._base = base;
    }
    return HTTPTransport;
}());
export { HTTPTransport };
export var api = new HTTPTransport(API_URL);
