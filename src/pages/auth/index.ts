import {AuthPage} from './component.js';
import Button from '../../components/button/index.js';
import {render, addHandlerForm, logFormData} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';

const authFormInputs = [
	{
		name: 'login',
		label: 'Логин',
		errorMessage: 'Неверный логин',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'password',
		label: 'Пароль',
		errorMessage: 'Неверный пароль',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
];

const authButton = new Button({child: 'Авторизоваться', type: 'submit'});
if (authButton.element) {
	Handlebars.registerPartial('auth-button', authButton.element.innerHTML);
}

const authPageComponent = new AuthPage({
	inputs: authFormInputs,
});
render('#root', authPageComponent);

const authForm = authPageComponent.element?.querySelector(`form`);

if (authForm) {
	addHandlerForm(authForm, logFormData);
	const authFormValidator = new FormValidator(authForm, authFormInputs);
	authFormValidator.on();
}
