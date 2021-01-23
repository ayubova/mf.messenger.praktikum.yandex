export const signupFormInputs = [
	{
		name: 'email',
		label: 'Почта',
		errorMessage: 'Неверная почта',
		validationRule: (i: string): boolean => Boolean(i) && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(i)
	},
	{
		name: 'login',
		label: 'Логин',
		errorMessage: 'Неверный логин',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'first_name',
		label: 'Имя',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'second_name',
		label: 'Фамилия',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'phone',
		label: 'Телефон',
		errorMessage: 'Неверный телефон',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'password',
		label: 'Пароль',
		errorMessage: 'Неверный пароль',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	},
	{
		name: 'confirm_password',
		label: 'Пароль (еще раз)',
		errorMessage: 'Неверный пароль',
		validationRule: (i: string): boolean => Boolean(i) && i.length > 2
	}
];

export const props = {
	inputs: signupFormInputs
};
