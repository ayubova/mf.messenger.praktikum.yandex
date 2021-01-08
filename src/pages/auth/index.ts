import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {Input} from '../../types';
import Button from '../../components/button/index.js';
import {showInputError, hideInputError} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';
import {authFormInputs} from './constants.js';
import {signIn} from './api.js';
interface Props {
	inputs: Input[];
}

export class AuthPage extends Component<Props> {
	constructor(props: Props) {
		const authButton = new Button({child: 'Авторизоваться', type: 'submit'});
		if (authButton.element) {
			Handlebars.registerPartial('auth-button', authButton.element.innerHTML);
		}
		super('div', props);

		const authForm = this.element?.querySelector(`form`);
		if (authForm) {
			const authFormValidator = new FormValidator(
				authForm,
				authFormInputs,
				showInputError,
				hideInputError,
				'.input-field__error',
				signIn
			);
			authFormValidator.on();
		}
	}
	render() {
		return template;
	}
}
