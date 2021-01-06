import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {Input} from '../../types';
import {showInputError, hideInputError} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';
import {profileFormInputs, passwordInputs} from './constants.js';
import Button from '../../components/button/index.js';
import {router} from '../../index.js';
import {getUser, logout, updateUser, uploadAvatar, changePassword} from './api.js';
import {getFileFromUser, addBaseURL} from '../../scripts/utils.js';

interface Props {
	inputs: Input[];
	passwordInputs: Input[];
	avatar: null | string;
	state: 'view' | 'changeProfile' | 'changePassword';
}

export class ProfilePage extends Component<Props> {
	private handleSubmit: (data: any) => void;
	constructor(props: Props) {
		Handlebars.registerHelper('isChangePassword', (state) => state === 'changePassword');
		Handlebars.registerHelper('isViewOnly', (state) => state === 'view');

		const saveButton = new Button({child: 'Сохранить', type: 'submit'});
		if (saveButton.element) {
			Handlebars.registerPartial('save-button', saveButton.element.innerHTML);
		}
		super('div', props);
		this.handleSubmit = this._handleSubmit.bind(this);
	}

	setEventListeners() {
		const profileForm = this.element?.querySelector<HTMLFormElement>(`#profile-form`);
		if (profileForm) {
			const profileFormValidator = new FormValidator(
				profileForm,
				profileFormInputs,
				showInputError,
				hideInputError,
				'.input-field__error',
				this.handleSubmit
			);
			profileFormValidator.on();
		}

		const passwordForm = this.element?.querySelector<HTMLFormElement>(`#password-form`);
		if (passwordForm) {
			const passwordFormValidator = new FormValidator(
				passwordForm,
				passwordInputs,
				showInputError,
				hideInputError,
				'.input-field__error',
				this.handleSubmit
			);
			passwordFormValidator.on();
		}
		this.element?.querySelector('#logout-button')?.addEventListener('click', logout);
		this.element?.querySelector('.left-menu__back-button')?.addEventListener('click', () => router.back());
		this.element?.querySelector('#update-user-button')?.addEventListener('click', () => {
			this.setProps({...this.props, state: 'changeProfile'});
		});
		this.element?.querySelector('#change-password-button')?.addEventListener('click', () => {
			this.setProps({...this.props, state: 'changePassword'});
		});
		this.element?.querySelector('.profile__avatar')?.addEventListener('click', () => {
			getFileFromUser()
				.then((files: FileList) => uploadAvatar(files[0]))
				.then((response: string) => {
					const user = JSON.parse(response);
					this.setProps({...this.props, avatar: addBaseURL(user.avatar)});
				});
		});
	}

	_handleSubmit(data: any) {
		if (this.props.state === 'changePassword') {
			changePassword(data).then(() => this.setProps({...this.props, state: 'view'}));
		}
		if (this.props.state === 'changeProfile') {
			updateUser(data)
				.then((response: string) => {
					const user = JSON.parse(response);
					const inputs = this.props.inputs.map((input) => ({...input, value: user[input.name]}));
					this.setProps({...this.props, inputs, avatar: addBaseURL(user.avatar)});
				})
				.then(() => this.setProps({...this.props, state: 'view'}));
		}
	}

	componentDidMount() {
		getUser().then((response: string) => {
			const user = JSON.parse(response);
			const inputs = this.props.inputs.map((input) => ({...input, value: user[input.name]}));
			this.setProps({...this.props, inputs, avatar: addBaseURL(user.avatar)});
		});
	}

	render() {
		return template;
	}
}
