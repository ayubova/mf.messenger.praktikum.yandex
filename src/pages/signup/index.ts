import template from './template';
import {Component} from '../../scripts/Component';
import {Input} from '../../types';
import Button from '../../components/button/index';
import {showInputError, hideInputError} from '../../scripts/utils';
import {FormValidator} from '../../scripts/FormValidator';
import {signupFormInputs} from './constants';
import {signUp} from './api';

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
