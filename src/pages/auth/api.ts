import {api} from '../../api/httpTransport.js';
import {router, Routes} from '../../index.js';

export const SIGN_ENDPOINT = 'auth/signin';

export const signIn = (data: any) =>
	api
		.post(SIGN_ENDPOINT, {data})
		.then(() => router.go(Routes.chat))
		.catch(alert);
