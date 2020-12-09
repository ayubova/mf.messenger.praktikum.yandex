import {Input} from '../types';
export class FormValidator {
	private inputs: Input[];
	private formElement: HTMLFormElement;
	private showInputError: (el: HTMLElement) => void;
	private hideInputError: (el: HTMLElement) => void;
	private errorFieldSelector: string;
	constructor(
		formElement: HTMLFormElement,
		inputs: Input[],
		showInputError: (el: HTMLElement) => void,
		hideInputError: (el: HTMLElement) => void,
		errorFieldSelector: string
	) {
		this.formElement = formElement;
		this.inputs = inputs;
		this.showInputError = showInputError;
		this.hideInputError = hideInputError;
		this.errorFieldSelector = errorFieldSelector;
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
			if (inputElement && inputElement instanceof HTMLInputElement) {
				return this.validate(inputElement, validationRule);
			}
		});

		const submitButton = this.formElement.querySelector<HTMLButtonElement>('button[type=submit]');

		if (submitButton) {
			submitButton.disabled = !isFormValid;
		}
	};

	validate(inputElement: HTMLInputElement, validationRule: (T: string) => boolean) {
		if (inputElement && inputElement.parentNode) {
			const errorField = inputElement.parentNode.querySelector(this.errorFieldSelector);
			const isValid = validationRule(inputElement.value);
			if (errorField && errorField instanceof HTMLElement) {
				if (isValid) {
					this.showInputError(errorField);
				} else {
					this.hideInputError(errorField);
				}
			}
			return isValid;
		}
	}
}
