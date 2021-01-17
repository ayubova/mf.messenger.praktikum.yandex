import {Component} from './Component';
import {API_BASE} from '../api/constants';

export function render(query: string, block: Component<any>) {
	const root = document.querySelector(query);
	if (block.element && root) {
		root && root.appendChild(block.element);
	}
	return root;
}

export const getFormData = <T extends object = any>(form: HTMLFormElement): T => {
	let result: any = {};
	const formData = new FormData(form);
	for (const pair of formData.entries()) {
		result = {...result, [pair[0]]: pair[1]};
	}
	return result;
};

export const showInputError = (element: HTMLElement) => element.classList.add('input-field__error_hidden');

export const hideInputError = (element: HTMLElement) => element.classList.remove('input-field__error_hidden');

export const getFileFromUser = (): Promise<FileList> =>
	new Promise((resolve) => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.addEventListener('change', (event: Event) => {
			resolve((event.target as HTMLInputElement).files!);
			input.remove();
		});
		input.click();
	});

export const addBaseURL = (restURL: string) => `${API_BASE}${restURL}`;
