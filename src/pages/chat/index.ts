import template from './template.js';
import {Component} from '../../scripts/Component.js';
import Button from '../../components/button/index.js';
import {ChatItem, ChatMessage} from '../../types';
import {router, Routes} from '../../index.js';
import {getChats, createChat} from './api.js';
interface Props {
	chatItems: ChatItem[];
	chatMessages: ChatMessage[];
	chatUser: string;
	handleProfile: () => void;
	currentChat: ChatItem;
}
export class ChatPage extends Component<Props> {
	constructor(props: Props) {
		Handlebars.registerHelper('isOwner', function (value) {
			return value === 'sent';
		});
		const addButton = new Button({child: 'Добавить', type: 'submit'});
		if (addButton.element) {
			Handlebars.registerPartial('add-button', addButton.element.innerHTML);
		}
		const deleteButton = new Button({child: 'Удалить', type: 'submit'});
		if (deleteButton.element) {
			Handlebars.registerPartial('delete-button', deleteButton.element.innerHTML);
		}
		super('div', props);
		this.element
			?.querySelector('.chat-header__profile')
			?.addEventListener('click', () => router.go(Routes.profile));
	}

	setEventListeners() {
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
			this.element?.querySelector('#popup-add-chat')?.classList.add('popup_opened');
		});
		const form = this.element?.querySelector('#add-chat-form');
		const input = form?.querySelector('input');

		form?.addEventListener('submit', (event: any) => {
			event.preventDefault();
			// TODO: add form validator
			if (input?.value) {
				createChat(input.value).then(() => {
					getChats().then((res: string) => {
						this.setProps({...this.props, chatItems: JSON.parse(res)});
					});
				});
			}
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
		getChats().then((res: string) => {
			this.setProps({...this.props, chatItems: JSON.parse(res)});
		});
	}

	render() {
		return template;
	}
}
