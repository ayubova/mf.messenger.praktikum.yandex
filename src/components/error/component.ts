import {Component} from '../../scripts/Component.js';
import template from './template.js';

interface Props {
	errorCode: string;
	errorMessage: string;
	linkButtonText: string;
}
export class ErrorBlock extends Component<Props> {
	constructor(props: Props) {
		super('div', props);
	}

	render() {
		return template;
	}
}
