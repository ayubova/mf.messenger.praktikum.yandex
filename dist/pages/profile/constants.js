export var States;
(function (States) {
    States["view"] = "view";
    States["changeProfile"] = "changeProfile";
    States["changePassword"] = "changePassword";
})(States || (States = {}));
export var profileFormInputs = [
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
        name: 'display_name',
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
export var passwordInputs = [
    {
        name: 'oldPassword',
        label: 'Старый пароль',
        type: 'password',
        errorMessage: 'Обязательное поле',
        validationRule: function (i) { return !!i; },
    },
    {
        name: 'newPassword',
        label: 'Новый пароль',
        type: 'password',
        errorMessage: 'Обязательное поле',
        validationRule: function (i) { return !!i; },
    },
];
export var props = {
    inputs: profileFormInputs,
    passwordInputs: passwordInputs,
    avatar: null,
    state: States.view,
};
