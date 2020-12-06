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
export function render(query, block) {
    var root = document.querySelector(query);
    if (block.element && root) {
        root && root.appendChild(block.element);
    }
    return root;
}
export var addHandlerForm = function (form, handler) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        handler(form);
    });
};
export var logFormData = function (form) {
    var e_1, _a;
    var formData = new FormData(form);
    try {
        for (var _b = __values(formData.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var pair = _c.value;
            console.log(pair[0] + ': ' + pair[1]);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
