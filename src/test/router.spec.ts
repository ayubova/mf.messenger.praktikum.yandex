// @ts-nocheck
import {router} from '../index.js';
import {AuthPage} from '../pages/auth/index.js';

import {expect} from 'chai';

describe('Router', function () {
	it('router rootQuery', () => {
		expect(router._rootQuery).to.equal('#app');
	});

	it('router use', () => {
		router.use('/auth', AuthPage, {}).start();
		expect(router.routes[0]._pathname).to.equal('/auth');
	});
});
