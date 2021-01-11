import template from './template.js';
import {Component} from '../../scripts/Component.js';
import Button from '../../components/button/index.js';
import {ChatMessage, ChatItem} from '../../types';
import {router, Routes} from '../../index.js';
import {getChats, createChat, searchUser, addUsers, deleteUsers} from './api.js';
interface Props {
	chatItems: ChatItem[];
	chatMessages: ChatMessage[];
	chatUser: string;
	handleProfile: () => void;
	currentChat: ChatItem;
}
export class ChatPage extends Component<Props> {
	constructor(props: Props) {
		Handlebars.registerHelper('isOwner', (value) => value === 'sent');
		const addButton = new Button({child: 'Добавить', type: 'submit'});
		if (addButton.element) {
			Handlebars.registerPartial('add-button', addButton.element.innerHTML);
		}
		const deleteButton = new Button({child: 'Удалить', type: 'submit'});
		if (deleteButton.element) {
			Handlebars.registerPartial('delete-button', deleteButton.element.innerHTML);
		}
		super('div', props);
	}

	setEventListeners() {
		this.element
			?.querySelector('.chat-header__profile')
			?.addEventListener('click', () => router.go(Routes.profile));

		this.element?.querySelector('.message-header__button')?.addEventListener('click', () => {
			this.element?.querySelector('.menu')?.classList.toggle('menu_opened');
		});
		this.element?.querySelector('#add-user-menu-item')?.addEventListener('click', () => {
			this.element?.querySelector('.menu')?.classList.remove('menu_opened');
			this.element?.querySelector('#popup-add-user')?.classList.add('popup_opened');
		});
		this.element?.querySelector('#remove-user-menu-item')?.addEventListener('click', () => {
			this.element?.querySelector('.menu')?.classList.remove('menu_opened');
			this.element?.querySelector('#popup-delete-user')?.classList.add('popup_opened');
		});
		this.element?.querySelector('.chat-header__add')?.addEventListener('click', () => {
			console.log('click add button');
			this.element?.querySelector('#popup-add-chat')?.classList.add('popup_opened');
		});

		const addChatForm = this.element?.querySelector('#add-chat-form');
		const addChatInput = addChatForm?.querySelector('input');

		addChatForm?.addEventListener('submit', (event: any) => {
			event.preventDefault();
			// TODO: add form validator
			if (addChatInput?.value) {
				createChat(addChatInput.value).then(() => {
					getChats().then((res: ChatItem[]) => {
						this.setProps({...this.props, chatItems: res});
					});
				});
			}
		});

		const addUserForm = this.element?.querySelector('#add-user-form');
		const addUserInput = addUserForm?.querySelector('input');

		addUserForm?.addEventListener('submit', (event: any) => {
			event.preventDefault();
			// TODO: add form validator
			if (addUserInput?.value) {
				searchUser(addUserInput.value).then((res) => {
					const userIds = res.map((user: any) => user.id);
					if (userIds.length) {
						addUsers(userIds, this.props.currentChat.id);
					} else {
						alert('Users are not found(((');
					}
				});
			}
		});

		const deleteUserForm = this.element?.querySelector('#delete-user-form');
		const deleteUserInput = deleteUserForm?.querySelector('input');

		deleteUserForm?.addEventListener('submit', (event: any) => {
			event.preventDefault();
			// TODO: add form validator
			if (deleteUserInput?.value) {
				searchUser(deleteUserInput.value).then((res) => {
					const userIds = res.map((user: any) => user.id);
					if (userIds.length) {
						deleteUsers(userIds, this.props.currentChat.id);
					} else {
						alert('Users are not found(((');
					}
				});
			}
		});

		this.element?.querySelectorAll('.popup')?.forEach((popup) => {
			popup.querySelector('.popup-close-button')?.addEventListener('click', () => {
				popup.classList.remove('popup_opened');
			});
		});

		this.element?.querySelectorAll<HTMLElement>('.chat-item')?.forEach((el) =>
			el.addEventListener('click', () => {
				const currentChat = this.props.chatItems.find((chat) => `${chat.id}` === el.dataset.chatItemId)!;
				this.setProps({
					...this.props,
					currentChat,
				});
			})
		);
	}
	componentDidMount() {
		getChats().then((res: ChatItem[]) => {
			this.setProps({...this.props, chatItems: res});
		});
	}

	render() {
		return template;
	}
}
