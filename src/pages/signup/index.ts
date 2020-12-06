import {SignupPage} from './component.js';
import Button from '../../components/button/index.js';
import {render, addHandlerForm, logFormData} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';

const signupFormInputs = [
	{
		name: 'email',
		label: 'Почта',
		errorMessage: 'Неверная почта',
		validationRule: (i: string): boolean => !!i && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(i),
	},
	{
		name: 'login',
		label: 'Логин',
		errorMessage: 'Неверный логин',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'first_name',
		label: 'Имя',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'second_name',
		label: 'Фамилия',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'phone',
		label: 'Телефон',
		errorMessage: 'Неверный телефон',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'password',
		label: 'Пароль',
		errorMessage: 'Неверный пароль',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'confirm_password',
		label: 'Пароль (еще раз)',
		errorMessage: 'Неверный пароль',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
];

const signupButton = new Button({child: 'Зарегистрироваться', type: 'submit'});
if (signupButton.element) {
	Handlebars.registerPartial('signup-button', signupButton.element.innerHTML);
}

const signupPageComponent = new SignupPage({
	inputs: signupFormInputs,
});

render('#root', signupPageComponent);

const signupForm = signupPageComponent.element?.querySelector(`form`);

if (signupForm) {
	const signupFormValidator = new FormValidator(signupForm, signupFormInputs);
	signupFormValidator.on();
	addHandlerForm(signupForm, logFormData);
}
