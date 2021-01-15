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
import { API_BASE } from '../api/constants.js';
export function render(query, block) {
    var root = document.querySelector(query);
    if (block.element && root) {
        root && root.appendChild(block.element);
    }
    return root;
}
export var getFormData = function (form) {
    var e_1, _a, _b;
    var result = {};
    var formData = new FormData(form);
    try {
        for (var _c = __values(formData.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var pair = _d.value;
            result = __assign(__assign({}, result), (_b = {}, _b[pair[0]] = pair[1], _b));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
};
export var showInputError = function (element) { return element.classList.add('input-field__error_hidden'); };
export var hideInputError = function (element) { return element.classList.remove('input-field__error_hidden'); };
export var getFileFromUser = function () {
    return new Promise(function (resolve) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.addEventListener('change', function (event) {
            resolve(event.target.files);
            input.remove();
        });
        input.click();
    });
};
export var addBaseURL = function (restURL) { return "" + API_BASE + restURL; };
