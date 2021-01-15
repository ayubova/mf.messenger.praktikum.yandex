import {Router} from './scripts/Router.js';
import {AuthPage} from './pages/auth/index.js';
import {props as authProps} from './pages/auth/constants.js';
import {SignupPage} from './pages/signup/index.js';
import {props as signupProps} from './pages/signup/constants.js';
import ErrorBlock from './components/error/index.js';
import {props as error404Props} from './pages/error-404/constants.js';
import {props as error500Props} from './pages/error-500/constants.js';
import {ProfilePage} from './pages/profile/index.js';
import {props as profileProps} from './pages/profile/constants.js';
import {ChatPage} from './pages/chat/index.js';
import {props as chatProps} from './pages/chat/constants.js';

export const router = new Router('#app');

export enum Routes {
	chat = '/',
	auth = '/auth',
	signup = '/signup',
	error404 = '/error-404',
	error500 = '/error-500',
	profile = '/profile',
}

export const PAGES = {
	[Routes.auth]: {component: AuthPage, initialProps: authProps},
	[Routes.signup]: {component: SignupPage, initialProps: signupProps},
	[Routes.error404]: {component: ErrorBlock, initialProps: error404Props},
	[Routes.error500]: {component: ErrorBlock, initialProps: error500Props},
	[Routes.profile]: {component: ProfilePage, initialProps: profileProps},
	[Routes.chat]: {component: ChatPage, initialProps: chatProps},
};

Object.entries(PAGES).forEach(([path, {component, initialProps}]) => router.use(path, component, initialProps).start());
