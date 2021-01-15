export var authFormInputs = [
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
export var props = {
    inputs: authFormInputs,
};
