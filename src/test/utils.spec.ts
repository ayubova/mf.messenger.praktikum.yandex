import {getFormData} from '../scripts/utils';

import {assert} from 'chai';

describe('utils', function () {
	it('getFormData function', () => {
		const form = document.createElement('form');
		form.innerHTML = `
		    <form id="myForm" name="myForm">
				<input type="text" id="name" name="name">
				<input type="text" id="login" name="login">
		    </form>
        `;
		const nameInput: HTMLInputElement | null = form?.querySelector('#name');
		if (nameInput) {
			nameInput.value = 'ayubova';
		}

		const loginInput: HTMLInputElement | null = form?.querySelector('#login');
		if (loginInput) {
			loginInput.value = 'Julia';
		}

		const formData = getFormData(form);
		assert.deepEqual(formData, {name: 'ayubova', login: 'Julia'});
	});
});
