// @ts-nocheck
import { router } from '../index';
import { AuthPage } from '../pages/auth/index';
import { expect } from 'chai';
describe('Router', function () {
    it('router rootQuery', function () {
        expect(router._rootQuery).to.equal('#app');
    });
    it('router use', function () {
        router.use('/auth', AuthPage, {}).start();
        expect(router.routes[0]._pathname).to.equal('/auth');
    });
});
