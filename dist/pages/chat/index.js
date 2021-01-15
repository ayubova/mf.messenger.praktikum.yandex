var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import template from './template.js';
import { Component } from '../../scripts/Component.js';
import Button from '../../components/button/index.js';
import { router, Routes } from '../../index.js';
import { getChats, createChat, searchUser, addUsers, deleteUsers } from './api.js';
var ChatPage = /** @class */ (function (_super) {
    __extends(ChatPage, _super);
    // @ts-ignore
    function ChatPage(props) {
        var _this = this;
        Handlebars.registerHelper('isOwner', function (value) { return value === 'sent'; });
        var addButton = new Button({ child: 'Добавить', type: 'submit' });
        if (addButton.element) {
            Handlebars.registerPartial('add-button', addButton.element.innerHTML);
        }
        var deleteButton = new Button({ child: 'Удалить', type: 'submit' });
        if (deleteButton.element) {
            Handlebars.registerPartial('delete-button', deleteButton.element.innerHTML);
        }
        _this = _super.call(this, 'div', props) || this;
        _this.menuElement = null;
        return _this;
    }
    ChatPage.prototype.setEventListeners = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        this.menuElement = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector('.menu');
        (_c = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector('.chat-header__profile')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return router.go(Routes.profile); });
        (_e = (_d = this.element) === null || _d === void 0 ? void 0 : _d.querySelector('.message-header__button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
            var _a;
            (_a = _this.menuElement) === null || _a === void 0 ? void 0 : _a.classList.toggle('menu_opened');
        });
        (_g = (_f = this.element) === null || _f === void 0 ? void 0 : _f.querySelector('#add-user-menu-item')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
            var _a, _b, _c;
            (_a = _this.menuElement) === null || _a === void 0 ? void 0 : _a.classList.remove('menu_opened');
            (_c = (_b = _this.element) === null || _b === void 0 ? void 0 : _b.querySelector('#popup-add-user')) === null || _c === void 0 ? void 0 : _c.classList.add('popup_opened');
        });
        (_j = (_h = this.element) === null || _h === void 0 ? void 0 : _h.querySelector('#remove-user-menu-item')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
            var _a, _b, _c;
            (_a = _this.menuElement) === null || _a === void 0 ? void 0 : _a.classList.remove('menu_opened');
            (_c = (_b = _this.element) === null || _b === void 0 ? void 0 : _b.querySelector('#popup-delete-user')) === null || _c === void 0 ? void 0 : _c.classList.add('popup_opened');
        });
        (_l = (_k = this.element) === null || _k === void 0 ? void 0 : _k.querySelector('.chat-header__add')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () {
            var _a, _b;
            (_b = (_a = _this.element) === null || _a === void 0 ? void 0 : _a.querySelector('#popup-add-chat')) === null || _b === void 0 ? void 0 : _b.classList.add('popup_opened');
        });
        var addChatForm = (_m = this.element) === null || _m === void 0 ? void 0 : _m.querySelector('#add-chat-form');
        var addChatInput = addChatForm === null || addChatForm === void 0 ? void 0 : addChatForm.querySelector('input');
        addChatForm === null || addChatForm === void 0 ? void 0 : addChatForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // TODO: add form validator
            if (addChatInput === null || addChatInput === void 0 ? void 0 : addChatInput.value) {
                createChat(addChatInput.value).then(function () {
                    getChats().then(function (res) {
                        _this.setProps(__assign(__assign({}, _this.props), { chatItems: res }));
                    });
                });
            }
        });
        var addUserForm = (_o = this.element) === null || _o === void 0 ? void 0 : _o.querySelector('#add-user-form');
        var addUserInput = addUserForm === null || addUserForm === void 0 ? void 0 : addUserForm.querySelector('input');
        addUserForm === null || addUserForm === void 0 ? void 0 : addUserForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // TODO: add form validator
            if (addUserInput === null || addUserInput === void 0 ? void 0 : addUserInput.value) {
                searchUser(addUserInput.value).then(function (res) {
                    var userIds = res.map(function (user) { return user.id; });
                    if (userIds.length) {
                        addUsers(userIds, _this.props.currentChat.id);
                    }
                    else {
                        alert('Users are not found(((');
                    }
                });
            }
        });
        var deleteUserForm = (_p = this.element) === null || _p === void 0 ? void 0 : _p.querySelector('#delete-user-form');
        var deleteUserInput = deleteUserForm === null || deleteUserForm === void 0 ? void 0 : deleteUserForm.querySelector('input');
        deleteUserForm === null || deleteUserForm === void 0 ? void 0 : deleteUserForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // TODO: add form validator
            if (deleteUserInput === null || deleteUserInput === void 0 ? void 0 : deleteUserInput.value) {
                searchUser(deleteUserInput.value).then(function (res) {
                    var userIds = res.map(function (user) { return user.id; });
                    if (userIds.length) {
                        deleteUsers(userIds, _this.props.currentChat.id);
                    }
                    else {
                        alert('Users are not found(((');
                    }
                });
            }
        });
        (_r = (_q = this.element) === null || _q === void 0 ? void 0 : _q.querySelectorAll('.popup')) === null || _r === void 0 ? void 0 : _r.forEach(function (popup) {
            var _a;
            (_a = popup.querySelector('.popup-close-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                popup.classList.remove('popup_opened');
            });
        });
        (_t = (_s = this.element) === null || _s === void 0 ? void 0 : _s.querySelectorAll('.chat-item')) === null || _t === void 0 ? void 0 : _t.forEach(function (el) {
            return el.addEventListener('click', function () {
                var currentChat = _this.props.chatItems.find(function (chat) { return "" + chat.id === el.dataset.chatItemId; });
                _this.setProps(__assign(__assign({}, _this.props), { currentChat: currentChat }));
            });
        });
    };
    ChatPage.prototype.componentDidMount = function () {
        var _this = this;
        getChats().then(function (res) {
            _this.setProps(__assign(__assign({}, _this.props), { chatItems: res }));
        });
    };
    ChatPage.prototype.render = function () {
        return template;
    };
    return ChatPage;
}(Component));
export { ChatPage };
