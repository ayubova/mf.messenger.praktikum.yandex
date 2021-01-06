import {api} from '../../api/httpTransport.js';
import {router, Routes} from '../../index.js';

const SIGNUP_ENDPOINT = 'auth/signup';

export const signUp = (data: any) =>
	api
		.post(SIGNUP_ENDPOINT, {data})
		.then(() => router.go(Routes.chat))
		.catch(alert);
