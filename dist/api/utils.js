var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function isPlainObject(value) {
    return (typeof value === 'object' &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === '[object Object]');
}
function isArray(value) {
    return Array.isArray(value);
}
function isArrayOrObject(value) {
    return isPlainObject(value) || isArray(value);
}
function getKey(key, parentKey) {
    return parentKey ? parentKey + "[" + key + "]" : key;
}
function getParams(data, parentKey) {
    var e_1, _a;
    var result = [];
    try {
        for (var _b = __values(Object.entries(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (isArrayOrObject(value)) {
                result.push.apply(result, __spread(getParams(value, getKey(key, parentKey))));
            }
            else {
                result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
export function queryStringify(data) {
    if (!isPlainObject(data)) {
        throw new Error('input must be an object');
    }
    return getParams(data)
        .map(function (arr) { return arr.join('='); })
        .join('&');
}
