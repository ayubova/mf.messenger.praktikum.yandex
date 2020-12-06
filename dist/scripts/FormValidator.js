var FormValidator = /** @class */ (function () {
    function FormValidator(formElement, inputs) {
        var _this = this;
        this.validateForm = function () {
            var isFormValid = _this.inputs.every(function (_a) {
                var name = _a.name, validationRule = _a.validationRule;
                var inputElement = _this.formElement.querySelector("input[name=" + name);
                return _this.validate(inputElement, validationRule);
            });
            var submitButton = _this.formElement.querySelector('button[type=submit]');
            if (submitButton) {
                submitButton.disabled = !isFormValid;
            }
        };
        this.formElement = formElement;
        this.inputs = inputs;
    }
    FormValidator.prototype.on = function () {
        var _this = this;
        this.inputs.forEach(function (_a) {
            var name = _a.name;
            var input = _this.formElement.querySelector("input[name=" + name);
            if (input) {
                input.addEventListener('blur', _this.validateForm);
            }
        });
        this.formElement.addEventListener('submit', this.validateForm);
    };
    FormValidator.prototype.validate = function (inputElement, validationRule) {
        var errorField = inputElement.parentNode.querySelector('.input-field__error');
        var isValid = validationRule(inputElement.value);
        if (isValid) {
            errorField.classList.add('input-field__error_hidden');
        }
        else {
            errorField.classList.remove('input-field__error_hidden');
        }
        return isValid;
    };
    return FormValidator;
}());
export { FormValidator };
