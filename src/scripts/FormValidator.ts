export class FormValidator {
	private inputs: any[];
	private formElement: HTMLFormElement;
	constructor(formElement: HTMLFormElement, inputs: any[]) {
		this.formElement = formElement;
		this.inputs = inputs;
	}

	on() {
		this.inputs.forEach(({name}) => {
			const input = this.formElement.querySelector(`input[name=${name}`);
			if (input) {
				input.addEventListener('blur', this.validateForm);
			}
		});
		this.formElement.addEventListener('submit', this.validateForm);
	}

	validateForm = () => {
		const isFormValid = this.inputs.every(({name, validationRule}) => {
			const inputElement = this.formElement.querySelector(`input[name=${name}`);
			return this.validate(inputElement, validationRule);
		});

		const submitButton = this.formElement.querySelector<HTMLButtonElement>('button[type=submit]');

		if (submitButton) {
			submitButton.disabled = !isFormValid;
		}
	};

	validate(inputElement: any, validationRule: any) {
		const errorField = inputElement.parentNode.querySelector('.input-field__error');
		const isValid = validationRule(inputElement.value);
		if (isValid) {
			errorField.classList.add('input-field__error_hidden');
		} else {
			errorField.classList.remove('input-field__error_hidden');
		}
		return isValid;
	}
}
