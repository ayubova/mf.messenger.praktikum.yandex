import {Input} from '../types';
import {getFormData} from './utils.js';
export class FormValidator<T = Record<string, string | number>> {
	private inputs: Input[];
	private formElement: HTMLFormElement;
	private showInputError: (el: HTMLElement) => void;
	private hideInputError: (el: HTMLElement) => void;
	private errorFieldSelector: string;
	private onSubmit: (data: T) => void;
	constructor(
		formElement: HTMLFormElement,
		inputs: Input[],
		showInputError: (el: HTMLElement) => void,
		hideInputError: (el: HTMLElement) => void,
		errorFieldSelector: string,
		onSubmit: (data: T) => void
	) {
		this.formElement = formElement;
		this.inputs = inputs;
		this.showInputError = showInputError;
		this.hideInputError = hideInputError;
		this.errorFieldSelector = errorFieldSelector;
		this.onSubmit = onSubmit;
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

	validateForm = (e: any) => {
		e.preventDefault();

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
		if (isFormValid && e.type === 'submit') {
			const formData = getFormData(this.formElement);
			this.onSubmit(formData);
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
