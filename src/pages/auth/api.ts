import {api} from '../../api/httpTransport';
import {router, Routes} from '../../index';

export const SIGN_ENDPOINT = 'auth/signin';

export const signIn = (data: {login: string; password: string}) =>
	api.post(SIGN_ENDPOINT, {data}).then(() => router.go(Routes.chat));
