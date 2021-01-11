// @ts-nocheck
import {getFormData} from '../scripts/utils';

import {assert, expect, should as shouldChai} from 'chai';
import {JSDOM} from 'jsdom';
const should = shouldChai();

const {window} = new JSDOM(``);
const {document, FormData} = window;
global.FormData = FormData;

describe('utils', function () {
	it('getFormData function', () => {
		const form = document.createElement('form');
		form.innerHTML = `
		    <form id="myForm" name="myForm">
				<input type="text" id="name" name="name">
				<input type="text" id="login" name="login">
		    </form>
		`;
		form.querySelector('#name').value = 'ayubova';
		form.querySelector('#login').value = 'Julia';
		const formData = getFormData(form);
		assert.deepEqual(formData, {name: 'ayubova', login: 'Julia'});
	});
});
