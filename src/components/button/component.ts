import template from './template';
import {Component} from '../../scripts/Component';

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
