import { getFormData } from './utils.js';
var FormValidator = /** @class */ (function () {
    function FormValidator(formElement, inputs, showInputError, hideInputError, errorFieldSelector, onSubmit) {
        var _this = this;
        this.validateForm = function (e) {
            e.preventDefault();
            var isFormValid = _this.inputs.every(function (_a) {
                var name = _a.name, validationRule = _a.validationRule;
                var inputElement = _this.formElement.querySelector("input[name=" + name);
                if (inputElement && inputElement instanceof HTMLInputElement) {
                    return _this.validate(inputElement, validationRule);
                }
            });
            var submitButton = _this.formElement.querySelector('button[type=submit]');
            if (submitButton) {
                submitButton.disabled = !isFormValid;
            }
            if (isFormValid && e.type === 'submit') {
                var formData = getFormData(_this.formElement);
                _this.onSubmit(formData);
            }
        };
        this.formElement = formElement;
        this.inputs = inputs;
        this.showInputError = showInputError;
        this.hideInputError = hideInputError;
        this.errorFieldSelector = errorFieldSelector;
        this.onSubmit = onSubmit;
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
        if (inputElement && inputElement.parentNode) {
            var errorField = inputElement.parentNode.querySelector(this.errorFieldSelector);
            var isValid = validationRule(inputElement.value);
            if (errorField && errorField instanceof HTMLElement) {
                if (isValid) {
                    this.showInputError(errorField);
                }
                else {
                    this.hideInputError(errorField);
                }
            }
            return isValid;
        }
    };
    return FormValidator;
}());
export { FormValidator };
