import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {Input} from '../../types';
import Button from '../../components/button/index.js';
import {showInputError, hideInputError} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';
import {signupFormInputs} from './constants.js';
import {signUp} from './api.js';

interface Props {
	inputs: Input[];
}

export class SignupPage extends Component<Props> {
	constructor(props: Props) {
		const signupButton = new Button({child: 'Зарегистрироваться', type: 'submit'});
		if (signupButton.element) {
			Handlebars.registerPartial('signup-button', signupButton.element.innerHTML);
		}
		super('div', props);

		const signupForm = this.element?.querySelector(`form`);

		if (signupForm) {
			const signupFormValidator = new FormValidator(
				signupForm,
				signupFormInputs,
				showInputError,
				hideInputError,
				'.input-field__error',
				signUp
			);
			signupFormValidator.on();
		}
	}

	render() {
		return template;
	}
}
