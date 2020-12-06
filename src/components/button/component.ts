import template from './template.js';
import {Component} from '../../scripts/Component.js';

interface Props {
	child: string;
	type: string;
}

export class Button extends Component<Props> {
	constructor(props: Props) {
		super('button', props);
	}

	render() {
		return template;
	}
}
