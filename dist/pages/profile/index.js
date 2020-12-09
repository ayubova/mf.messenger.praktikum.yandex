var _a;
import { ProfilePage } from './component.js';
import { render, addHandlerForm, logFormData, showInputError, hideInputError } from '../../scripts/utils.js';
import Button from '../../components/button/index.js';
import { FormValidator } from '../../scripts/FormValidator.js';
var profileFormInputs = [
    {
        name: 'email',
        label: 'Почта',
        type: 'email',
        errorMessage: 'Неверная почта',
        validationRule: function (i) { return !!i && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(i); },
    },
    {
        name: 'login',
        label: 'Логин',
        type: 'text',
        errorMessage: 'Неверный логин',
        validationRule: function (i) { return !!i && i.length > 2; },
    },
    {
        name: 'first_name',
        label: 'Имя',
        type: 'text',
        errorMessage: 'Обязательное поле',
        validationRule: function (i) { return !!i && i.length > 2; },
    },
    {
        name: 'second_name',
        label: 'Фамилия',
        type: 'text',
        errorMessage: 'Обязательное поле',
        validationRule: function (i) { return !!i && i.length > 2; },
    },
    {
        name: 'chat_name',
        label: 'Имя в чате',
        type: 'text',
        errorMessage: 'Обязательное поле',
        validationRule: function (i) { return !!i && i.length > 2; },
    },
    {
        name: 'phone',
        label: 'Телефон',
        type: 'tel',
        errorMessage: 'Неверный телефон',
        validationRule: function (i) { return !!i && /[^+\d]/g.test(i); },
    },
];
var saveButton = new Button({ child: 'Сохранить', type: 'submit' });
if (saveButton.element) {
    Handlebars.registerPartial('save-button', saveButton.element.innerHTML);
}
var profilePageComponent = new ProfilePage({
    inputs: profileFormInputs,
});
render('#root', profilePageComponent);
var profileForm = (_a = profilePageComponent.element) === null || _a === void 0 ? void 0 : _a.querySelector("form");
if (profileForm) {
    var profileFormValidator = new FormValidator(profileForm, profileFormInputs, showInputError, hideInputError, '.input-field__error');
    profileFormValidator.on();
    addHandlerForm(profileForm, logFormData);
}
