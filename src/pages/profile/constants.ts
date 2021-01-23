export interface Input {
	name: string;
	label: string;
	errorMessage: string;
	validationRule: (i: string) => boolean;
	type?: string;
	disabled?: boolean;
}

export enum States {
	view = 'view',
	changeProfile = 'changeProfile',
	changePassword = 'changePassword',
}

export type AnyState = keyof typeof States;

export interface User {
	id: number;
	avatar: string | null;
	display_name: string;
	first_name: string;
	second_name: string;
	email: string;
	login: string;
	phone: string;
}

export interface ChangePasswordPayload {
	oldPassword: string;
	newPassword: string;
}

export const profileFormInputs = [
	{
		name: 'email',
		label: 'Почта',
		type: 'email',
		errorMessage: 'Неверная почта',
		validationRule: (i: string): boolean => Boolean(i) && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(i)
	},
	{
		name: 'login',
		label: 'Логин',
		type: 'text',
		errorMessage: 'Неверный логин',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'first_name',
		label: 'Имя',
		type: 'text',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'second_name',
		label: 'Фамилия',
		type: 'text',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'display_name',
		label: 'Имя в чате',
		type: 'text',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'phone',
		label: 'Телефон',
		type: 'tel',
		errorMessage: 'Неверный телефон',
		validationRule: (i: string): boolean => Boolean(i) && /[^+\d]/g.test(i)
	}
];

export const passwordInputs = [
	{
		name: 'oldPassword',
		label: 'Старый пароль',
		type: 'password',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i)
	},
	{
		name: 'newPassword',
		label: 'Новый пароль',
		type: 'password',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i)
	}
];

export const props = {
	inputs: profileFormInputs,
	passwordInputs,
	avatar: null,
	state: States.view
};
