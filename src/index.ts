import {Router} from './scripts/Router';
import {AuthPage} from './pages/auth/index';
import {props as authProps} from './pages/auth/constants';
import {SignupPage} from './pages/signup/index';
import {props as signupProps} from './pages/signup/constants';
import ErrorBlock from './components/error/index';
import {props as error404Props} from './pages/error-404/constants';
import {props as error500Props} from './pages/error-500/constants';
import {ProfilePage} from './pages/profile/index';
import {props as profileProps} from './pages/profile/constants';
import {ChatPage} from './pages/chat/index';
import {props as chatProps} from './pages/chat/constants';

export const router = new Router('#app');

export enum Routes {
	auth = '/auth',
	signup = '/signup',
	error404 = '/404',
	error500 = '/error-500',
	profile = '/profile',
    chat = '/chat',
    main = '/',
}

export const PAGES = {
	[Routes.auth]: {component: AuthPage, initialProps: authProps},
	[Routes.signup]: {component: SignupPage, initialProps: signupProps},
	[Routes.error500]: {component: ErrorBlock, initialProps: error500Props},
	[Routes.profile]: {component: ProfilePage, initialProps: profileProps},
	[Routes.chat]: {component: ChatPage, initialProps: chatProps},
	[Routes.main]: {component: ChatPage, initialProps: chatProps},
	[Routes.error404]: {component: ErrorBlock, initialProps: error404Props}
};

// @ts-ignore
Object.entries(PAGES).forEach(([path, {component, initialProps}]) => router.use(path, component, initialProps).start());

if (!router.getRoute(window.location.pathname)) {
	router.go(Routes.error404);
}
