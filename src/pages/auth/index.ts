import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {Input} from '../../types';
import Button from '../../components/button/index.js';
import {addHandlerForm, logFormData, showInputError, hideInputError} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';
import {authFormInputs} from './constants.js';
interface Props {
	inputs: Input[];
}

export class AuthPage extends Component<Props> {
	constructor(props: Props) {
		const authButton = new Button({child: 'Авторизоваться', type: 'submit'});
		if (authButton.element) {
			console.log('authButton', authButton);

			Handlebars.registerPartial('auth-button', authButton.element.innerHTML);
		}
		super('div', props);
	}

	componentDidMount() {
		const authForm = this.element?.querySelector(`form`);

		if (authForm) {
			addHandlerForm(authForm, logFormData);
			const authFormValidator = new FormValidator(
				authForm,
				authFormInputs,
				showInputError,
				hideInputError,
				'.input-field__error'
			);
			authFormValidator.on();
		}
	}

	show() {
		console.log('showAuth');
	}

	render() {
		return template;
	}
}
