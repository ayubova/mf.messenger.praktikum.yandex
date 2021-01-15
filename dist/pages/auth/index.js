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
import template from './template.js';
import { Component } from '../../scripts/Component.js';
import Button from '../../components/button/index.js';
import { showInputError, hideInputError } from '../../scripts/utils.js';
import { FormValidator } from '../../scripts/FormValidator.js';
import { authFormInputs } from './constants.js';
import { signIn } from './api.js';
var AuthPage = /** @class */ (function (_super) {
    __extends(AuthPage, _super);
    function AuthPage(props) {
        var _a;
        var _this = this;
        var authButton = new Button({ child: 'Авторизоваться', type: 'submit' });
        if (authButton.element) {
            Handlebars.registerPartial('auth-button', authButton.element.innerHTML);
        }
        _this = _super.call(this, 'div', props) || this;
        var authForm = (_a = _this.element) === null || _a === void 0 ? void 0 : _a.querySelector("form");
        if (authForm) {
            var authFormValidator = new FormValidator(authForm, authFormInputs, showInputError, hideInputError, '.input-field__error', signIn);
            authFormValidator.on();
        }
        return _this;
    }
    AuthPage.prototype.render = function () {
        return template;
    };
    return AuthPage;
}(Component));
export { AuthPage };
