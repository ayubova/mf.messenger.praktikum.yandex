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
import { showInputError, hideInputError } from '../../scripts/utils.js';
import { FormValidator } from '../../scripts/FormValidator.js';
import Button from '../../components/button/index.js';
import { router } from '../../index.js';
import { getFileFromUser, addBaseURL } from '../../scripts/utils.js';
import { profileFormInputs, passwordInputs, States } from './constants.js';
import { getUser, logout, updateUser, uploadAvatar, changePassword } from './api.js';
var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(props) {
        var _this = this;
        Handlebars.registerHelper('isChangePassword', function (state) { return state === States.changePassword; });
        Handlebars.registerHelper('isViewOnly', function (state) { return state === States.view; });
        var saveButton = new Button({ child: 'Сохранить', type: 'submit' });
        if (saveButton.element) {
            Handlebars.registerPartial('save-button', saveButton.element.innerHTML);
        }
        _this = _super.call(this, 'div', props) || this;
        _this.handleSubmit = _this._handleSubmit.bind(_this);
        _this.setState = _this._setState.bind(_this);
        return _this;
    }
    ProfilePage.prototype.setEventListeners = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var profileForm = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("#profile-form");
        if (profileForm) {
            var profileFormValidator = new FormValidator(profileForm, profileFormInputs, showInputError, hideInputError, '.input-field__error', this.handleSubmit);
            profileFormValidator.on();
        }
        var passwordForm = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector("#password-form");
        if (passwordForm) {
            var passwordFormValidator = new FormValidator(passwordForm, passwordInputs, showInputError, hideInputError, '.input-field__error', this.handleSubmit);
            passwordFormValidator.on();
        }
        (_d = (_c = this.element) === null || _c === void 0 ? void 0 : _c.querySelector('#logout-button')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', logout);
        (_f = (_e = this.element) === null || _e === void 0 ? void 0 : _e.querySelector('.left-menu__back-button')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () { return router.back(); });
        (_h = (_g = this.element) === null || _g === void 0 ? void 0 : _g.querySelector('#update-user-button')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () { return _this.setState(States.changeProfile); });
        (_k = (_j = this.element) === null || _j === void 0 ? void 0 : _j.querySelector('#change-password-button')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () { return _this.setState(States.changePassword); });
        (_m = (_l = this.element) === null || _l === void 0 ? void 0 : _l.querySelector('.profile__avatar')) === null || _m === void 0 ? void 0 : _m.addEventListener('click', function () {
            getFileFromUser()
                .then(function (files) { return uploadAvatar(files[0]); })
                .then(function (user) { return _this.setProps(__assign(__assign({}, _this.props), { avatar: addBaseURL(user.avatar) })); });
        });
    };
    ProfilePage.prototype._handleSubmit = function (data) {
        var _this = this;
        if (this.props.state === States.changePassword) {
            changePassword(data).then(function () { return _this.setState(States.view); });
        }
        if (this.props.state === States.changeProfile) {
            updateUser(data)
                .then(function (user) {
                var inputs = _this.props.inputs.map(function (input) { return (__assign(__assign({}, input), { value: user[input.name] })); });
                _this.setProps(__assign(__assign({}, _this.props), { inputs: inputs, avatar: user.avatar && addBaseURL(user.avatar) }));
            })
                .then(function () { return _this.setState(States.view); });
        }
    };
    ProfilePage.prototype._setState = function (state) {
        this.setProps(__assign(__assign({}, this.props), { state: state }));
    };
    ProfilePage.prototype.componentDidMount = function () {
        var _this = this;
        getUser().then(function (user) {
            var inputs = _this.props.inputs.map(function (input) { return (__assign(__assign({}, input), { value: user[input.name] })); });
            _this.setProps(__assign(__assign({}, _this.props), { inputs: inputs, avatar: user.avatar && addBaseURL(user.avatar) }));
        });
    };
    ProfilePage.prototype.render = function () {
        return template;
    };
    return ProfilePage;
}(Component));
export { ProfilePage };
