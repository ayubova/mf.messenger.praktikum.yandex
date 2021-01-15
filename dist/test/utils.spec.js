// @ts-nocheck
import { getFormData } from '../scripts/utils';
import { assert } from 'chai';
describe('utils', function () {
    it('getFormData function', function () {
        var form = document.createElement('form');
        form.innerHTML = "\n\t\t    <form id=\"myForm\" name=\"myForm\">\n\t\t\t\t<input type=\"text\" id=\"name\" name=\"name\">\n\t\t\t\t<input type=\"text\" id=\"login\" name=\"login\">\n\t\t    </form>\n\t\t";
        form.querySelector('#name').value = 'ayubova';
        form.querySelector('#login').value = 'Julia';
        var formData = getFormData(form);
        assert.deepEqual(formData, { name: 'ayubova', login: 'Julia' });
    });
});
