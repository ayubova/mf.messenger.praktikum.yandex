// @ts-nocheck
import {getFormData} from '../scripts/utils.js';

const {assert, expect} = chai;

const add = (a: number, b: number) => a + b;
describe('utils', function () {
	it('add', () => {
		assert.equal(add(3, 5), 8);
	});
});
