import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {showInputError, hideInputError} from '../../scripts/utils.js';
import {FormValidator} from '../../scripts/FormValidator.js';
import Button from '../../components/button/index.js';
import {router} from '../../index.js';
import {getFileFromUser, addBaseURL} from '../../scripts/utils.js';

import {profileFormInputs, passwordInputs, States, AnyState, User, ChangePasswordPayload, Input} from './constants.js';
import {getUser, logout, updateUser, uploadAvatar, changePassword} from './api.js';

export interface Props {
	inputs: Input[];
	passwordInputs: Input[];
	avatar: string | null;
	state: AnyState;
}
export class ProfilePage extends Component<Props> {
	private handleSubmit: (data: ChangePasswordPayload | User) => void;
	constructor(props: Props) {
		Handlebars.registerHelper('isChangePassword', (state: AnyState) => state === States.changePassword);
		Handlebars.registerHelper('isViewOnly', (state: AnyState) => state === States.view);

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
			const profileFormValidator = new FormValidator<User>(
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
			const passwordFormValidator = new FormValidator<ChangePasswordPayload>(
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
			this.setProps({...this.props, state: States.changeProfile});
		});
		this.element?.querySelector('#change-password-button')?.addEventListener('click', () => {
			this.setProps({...this.props, state: States.changePassword});
		});
		this.element?.querySelector('.profile__avatar')?.addEventListener('click', () => {
			getFileFromUser()
				.then((files: FileList) => uploadAvatar(files[0]))
				.then((user: User) => this.setProps({...this.props, avatar: addBaseURL(user.avatar as string)}));
		});
	}

	_handleSubmit(data: ChangePasswordPayload | User) {
		if (this.props.state === States.changePassword) {
			changePassword(data as ChangePasswordPayload).then(() =>
				this.setProps({...this.props, state: States.view})
			);
		}
		if (this.props.state === States.changeProfile) {
			updateUser(data as User)
				.then((user: User) => {
					const inputs = this.props.inputs.map((input) => ({
						...input,
						value: user[input.name as keyof User],
					}));
					this.setProps({...this.props, inputs, avatar: user.avatar && addBaseURL(user.avatar)});
				})
				.then(() => this.setProps({...this.props, state: States.view}));
		}
	}

	componentDidMount() {
		getUser().then((user: User) => {
			const inputs = this.props.inputs.map((input) => ({...input, value: user[input.name as keyof User]}));
			this.setProps({...this.props, inputs, avatar: user.avatar && addBaseURL(user.avatar)});
		});
	}

	render() {
		return template;
	}
}
