import template from './template.js';
import {Component} from '../../scripts/Component.js';
import {Input} from '../../types';

interface Props {
	inputs: Input[];
}

export class SignupPage extends Component<Props> {
	constructor(props: Props) {
		super('div', props);
	}

	componentDidMount() {}

	render() {
		return template;
	}
}
