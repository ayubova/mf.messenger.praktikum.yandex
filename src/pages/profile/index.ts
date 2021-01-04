import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {Input} from '../../types';
import {addHandlerForm, logFormData, showInputError, hideInputError} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';
import {profileFormInputs} from './constants.js';
import Button from '../../components/button/index.js';

interface Props {
	inputs: Input[];
}

export class ProfilePage extends Component<Props> {
	constructor(props: Props) {
		const saveButton = new Button({child: 'Сохранить', type: 'submit'});
		if (saveButton.element) {
			Handlebars.registerPartial('save-button', saveButton.element.innerHTML);
		}
		super('div', props);
	}

	componentDidMount() {
		const profileForm = this.element?.querySelector(`form`);

		if (profileForm) {
			const profileFormValidator = new FormValidator(
				profileForm,
				profileFormInputs,
				showInputError,
				hideInputError,
				'.input-field__error'
			);
			profileFormValidator.on();
			addHandlerForm(profileForm, logFormData);
		}
	}

	render() {
		return template;
	}
}
