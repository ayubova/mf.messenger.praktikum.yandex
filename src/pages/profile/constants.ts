export const profileFormInputs = [
	{
		name: 'email',
		label: 'Почта',
		type: 'email',
		errorMessage: 'Неверная почта',
		validationRule: (i: string): boolean => !!i && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(i),
	},
	{
		name: 'login',
		label: 'Логин',
		type: 'text',
		errorMessage: 'Неверный логин',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'first_name',
		label: 'Имя',
		type: 'text',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'second_name',
		label: 'Фамилия',
		type: 'text',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'chat_name',
		label: 'Имя в чате',
		type: 'text',
		errorMessage: 'Обязательное поле',
		validationRule: (i: string): boolean => !!i && i.length > 2,
	},
	{
		name: 'phone',
		label: 'Телефон',
		type: 'tel',
		errorMessage: 'Неверный телефон',
		validationRule: (i: string): boolean => !!i && /[^+\d]/g.test(i),
	},
];

export const props = {
	inputs: profileFormInputs,
};
