import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {ChatItem, ChatMessage} from '../../types';
import {router, Routes} from '../../index.js';
import {getChats} from './api.js';
interface Props {
	chatItems: ChatItem[];
	chatMessages: ChatMessage[];
	chatUser: string;
	handleProfile: () => void;
}
export class ChatPage extends Component<Props> {
	constructor(props: Props) {
		Handlebars.registerHelper('isOwner', function (value) {
			return value === 'sent';
		});
		super('div', props);
		this.element
			?.querySelector('.chat-header__profile')
			?.addEventListener('click', () => router.go(Routes.profile));
	}

	componentDidMount() {
		getChats().then((res: string) => console.log('chats', res));
	}

	render() {
		return template;
	}
}
