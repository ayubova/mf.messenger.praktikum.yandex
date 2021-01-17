import {api} from '../../api/httpTransport';
import {router, Routes} from '../../index';

const SIGNUP_ENDPOINT = 'auth/signup';

export const signUp = (data: any) => api.post(SIGNUP_ENDPOINT, {data}).then(() => router.go(Routes.chat));
