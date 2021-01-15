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
import { EventBus } from './EventBus.js';
var Component = /** @class */ (function () {
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    function Component(tagName, props) {
        var _this = this;
        this._element = null;
        this.setProps = function (nextProps) {
            if (!nextProps) {
                return;
            }
            Object.assign(_this.props, nextProps);
        };
        var eventBus = new EventBus();
        this._meta = {
            tagName: tagName,
            props: props,
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Component.EVENTS.INIT);
    }
    Component.prototype._registerEvents = function (eventBus) {
        eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    };
    Component.prototype._createResources = function () {
        this._element = this._createDocumentElement(this._meta.tagName);
    };
    Component.prototype.init = function () {
        this._createResources();
        this.eventBus.emit(Component.EVENTS.FLOW_CDM);
    };
    Component.prototype._componentDidMount = function () {
        this.componentDidMount();
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };
    Component.prototype.componentDidMount = function (oldProps) { };
    Component.prototype._componentDidUpdate = function (oldProps, newProps) {
        var response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    };
    Component.prototype.componentDidUpdate = function (oldProps, newProps) {
        return true;
    };
    Object.defineProperty(Component.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype._render = function () {
        var block = this.render();
        if (this._element) {
            this._element.innerHTML = Handlebars.compile(block)(this.props);
            this.setEventListeners();
        }
    };
    Component.prototype.setEventListeners = function () { };
    Component.prototype.render = function () { };
    Component.prototype.getContent = function () {
        return this.element;
    };
    Component.prototype._makePropsProxy = function (props) {
        var _this = this;
        return new Proxy(props, {
            get: function (target, prop) {
                var value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set: function (target, prop, value) {
                target[prop] = value;
                _this.eventBus.emit(Component.EVENTS.FLOW_CDU, __assign({}, target), target);
                return true;
            },
            deleteProperty: function () {
                throw new Error('Нет доступа');
            },
        });
    };
    Component.prototype._createDocumentElement = function (tagName) {
        return document.createElement(tagName);
    };
    Component.prototype.show = function () {
        if (this.element) {
            this.element.style.display = 'block';
        }
    };
    Component.prototype.hide = function () {
        if (this.element) {
            this.element.style.display = 'none';
        }
    };
    Component.EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };
    return Component;
}());
export { Component };
