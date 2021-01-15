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
var EventBus = /** @class */ (function () {
    function EventBus() {
        this._listeners = {};
    }
    EventBus.prototype.on = function (event, callback) {
        if (!this._listeners[event]) {
            this._listeners[event] = [];
        }
        this._listeners[event].push(callback);
    };
    EventBus.prototype.off = function (event, callback) {
        if (!this._listeners[event]) {
            throw new Error("\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F: " + event);
        }
        this._listeners[event] = this._listeners[event].filter(function (listener) { return listener !== callback; });
    };
    EventBus.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._listeners[event]) {
            throw new Error("\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F: " + event);
        }
        this._listeners[event].forEach(function (listener) {
            listener.apply(void 0, __spread(args));
        });
    };
    return EventBus;
}());
export { EventBus };
