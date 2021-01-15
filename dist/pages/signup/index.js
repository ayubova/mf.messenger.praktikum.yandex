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
import { signupFormInputs } from './constants.js';
import { signUp } from './api.js';
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(props) {
        var _a;
        var _this = this;
        var signupButton = new Button({ child: 'Зарегистрироваться', type: 'submit' });
        if (signupButton.element) {
            Handlebars.registerPartial('signup-button', signupButton.element.innerHTML);
        }
        _this = _super.call(this, 'div', props) || this;
        var signupForm = (_a = _this.element) === null || _a === void 0 ? void 0 : _a.querySelector("form");
        if (signupForm) {
            var signupFormValidator = new FormValidator(signupForm, signupFormInputs, showInputError, hideInputError, '.input-field__error', signUp);
            signupFormValidator.on();
        }
        return _this;
    }
    SignupPage.prototype.render = function () {
        return template;
    };
    return SignupPage;
}(Component));
export { SignupPage };
