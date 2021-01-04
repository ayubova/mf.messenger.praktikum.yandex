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
		Handlebars.registerHelper('isOwner', function (value) {
			return value === 'sent';
		});
		super('div', props);
	}

	componentDidMount() {}

	render() {
		return template;
	}
}
