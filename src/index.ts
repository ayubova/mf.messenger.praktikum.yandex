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

const router = new Router('#app');
router.use('/auth', AuthPage, authProps).start();
router.use('/signup', SignupPage, signupProps).start();
router.use('/error-404', ErrorBlock, error404Props).start();
router.use('/error-500', ErrorBlock, error500Props).start();
router.use('/profile', ProfilePage, profileProps).start();
router.use('/chat', ChatPage, chatProps).start();
