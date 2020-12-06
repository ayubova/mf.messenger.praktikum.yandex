import {Component} from '../../scripts/Component.js';

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
		return `
        <main class="error">
            <h3 class="error__title">{{errorCode}}</h3>
            <div class="error__message">{{errorMessage}}</div>
            <a href="" class="error__back-link">{{linkButtonText}}</a>
        </main>
        `;
	}
}
