import template from './template';
import {Component} from '../../scripts/Component';
import {Input} from '../../types';
import Button from '../../components/button/index';
import {showInputError, hideInputError} from '../../scripts/utils';
import {FormValidator} from '../../scripts/FormValidator';
import {authFormInputs} from './constants';
import {signIn} from './api';
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

		const authForm = this.element?.querySelector('form');
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
