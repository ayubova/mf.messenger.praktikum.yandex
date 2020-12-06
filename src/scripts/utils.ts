import {Component} from './Component';

export function render(query: string, block: Component<any>) {
	const root = document.querySelector(query);
	if (block.element && root) {
		root && root.appendChild(block.element);
	}
	return root;
}

export const addHandlerForm = (form: HTMLFormElement, handler: any): void => {
	form.addEventListener('submit', function (evt: Event) {
		evt.preventDefault();
		handler(form);
	});
};
export const logFormData = (form: HTMLFormElement) => {
	const formData = new FormData(form);
	for (const pair of formData.entries()) {
		console.log(pair[0] + ': ' + pair[1]);
	}
};
