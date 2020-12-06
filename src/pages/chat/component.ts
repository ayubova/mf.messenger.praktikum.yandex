import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {ChatItem, ChatMessage} from '../../types';

interface Props {
	chatItems: ChatItem[];
	chatMessages: ChatMessage[];
	chatUser: string;
}
export class ChatPage extends Component<Props> {
	constructor(props: Props) {
		super('div', props);
	}

	render() {
		return template;
	}
}
