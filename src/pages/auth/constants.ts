export const authFormInputs = [
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

export const props = {
	inputs: authFormInputs,
};
