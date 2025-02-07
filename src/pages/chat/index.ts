import template from './template';
import {Component} from '../../scripts/Component';
import Button from '../../components/button/index';
import {ChatMessage, ChatItem, User} from '../../types';
import {router, Routes} from '../../index';
import {getChats, createChat, searchUser, addUsers, deleteUsers, getChatToken, initChat,
	getAuthUser, sendMessage} from './api';

interface Props {
	chatItems: ChatItem[] | [];
	chatMessages: ChatMessage[];
	handleProfile: () => void;
    currentChat: ChatItem;
    authUser: User;
}

export class ChatPage extends Component<Props> {
	private menuElement: null | HTMLElement = null;
	// @ts-ignore
	constructor(props: Props) {
		Handlebars.registerHelper('isAuthUser', id => id === props.authUser.id);

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
		this.menuElement = this.element!.querySelector<HTMLElement>('.menu');
		this.element
			?.querySelector('.chat-header__profile')
			?.addEventListener('click', () => router.go(Routes.profile));

		this.element?.querySelector('.message-header__button')?.addEventListener('click', () => {
			this.menuElement?.classList.toggle('menu_opened');
		});
		this.element?.querySelector('#add-user-menu-item')?.addEventListener('click', () => {
			this.menuElement?.classList.remove('menu_opened');
			this.element?.querySelector('#popup-add-user')?.classList.add('popup_opened');
		});
		this.element?.querySelector('#remove-user-menu-item')?.addEventListener('click', () => {
			this.menuElement?.classList.remove('menu_opened');
			this.element?.querySelector('#popup-delete-user')?.classList.add('popup_opened');
		});
		this.element?.querySelector('.chat-header__add')?.addEventListener('click', () => {
			this.element?.querySelector('#popup-add-chat')?.classList.add('popup_opened');
		});

		const addChatForm = this.element?.querySelector('#add-chat-form');
		const addChatInput = addChatForm?.querySelector('input');

		addChatForm?.addEventListener('submit', (event: any) => {
			event.preventDefault();
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
			if (addUserInput?.value) {
				searchUser(addUserInput.value).then(res => {
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
			if (deleteUserInput?.value) {
				searchUser(deleteUserInput.value).then(res => {
					const userIds = res.map((user: any) => user.id);
					if (userIds.length) {
						deleteUsers(userIds, this.props.currentChat.id);
					} else {
						alert('Users are not found(((');
					}
				});
			}
		});

		this.element?.querySelectorAll('.popup')?.forEach(popup => {
			popup.querySelector('.popup-close-button')?.addEventListener('click', () => {
				popup.classList.remove('popup_opened');
			});
		});

		this.element?.querySelectorAll<HTMLElement>('.chat-item')?.forEach(el =>
			el.addEventListener('click', () => {
				const currentChat = this.props.chatItems
					.find(chat => `${chat.id}` === el.dataset.chatItemId)!;
				this.setProps({
					...this.props,
					currentChat
				});

				const onMessage = (data: ChatMessage) => {
					if (data.type === 'message') {
						const formattedMessage = {...data, time: new Date(data.time).toLocaleString()};
						this.setProps({...this.props, chatMessages: [...this.props.chatMessages, formattedMessage]});
					}

					if (Array.isArray(data)) {
						const formattedMessages =
                        data.map(message => ({...message,
                        	userId: message.user_id,
                        	time: new Date(message.time).toLocaleString()}))
                        	.reverse();
						this.setProps({...this.props, chatMessages: formattedMessages});
					}
				};

				getChatToken(currentChat.id).then(({token}) =>
					initChat(currentChat.id, this.props.authUser.id, token, onMessage));
			})
		);
		const sendMessageButton = this.element?.querySelector('#send-message');
		sendMessageButton?.addEventListener('click', () => {
			const messageInput: HTMLInputElement | null = this.element!.querySelector('#send-message-input');
			if (messageInput) {
				sendMessage(messageInput.value);
				messageInput.value = '';
			}
		});
	}

	componentDidMount() {
		getChats().then((res: ChatItem[]) => {
			this.setProps({...this.props, chatItems: res});
		});
		getAuthUser().then((authUser: User) => {
			this.setProps({...this.props, authUser});
		});
	}

	render() {
		return template;
	}
}
