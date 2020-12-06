var _a;
import { AuthPage } from './component.js';
import Button from '../../components/button/index.js';
import { render, addHandlerForm, logFormData } from '../../scripts/utils.js';
import { FormValidator } from '../../scripts/FormValidator.js';
var authFormInputs = [
    {
        name: 'login',
        label: 'Логин',
        errorMessage: 'Неверный логин',
        validationRule: function (i) { return !!i && i.length > 2; },
    },
    {
        name: 'password',
        label: 'Пароль',
        errorMessage: 'Неверный пароль',
        validationRule: function (i) { return !!i && i.length > 2; },
    },
];
var authButton = new Button({ child: 'Авторизоваться', type: 'submit' });
if (authButton.element) {
    Handlebars.registerPartial('auth-button', authButton.element.innerHTML);
}
var authPageComponent = new AuthPage({
    inputs: authFormInputs,
});
render('#root', authPageComponent);
var authForm = (_a = authPageComponent.element) === null || _a === void 0 ? void 0 : _a.querySelector("form");
if (authForm) {
    addHandlerForm(authForm, logFormData);
    var authFormValidator = new FormValidator(authForm, authFormInputs);
    authFormValidator.on();
}
