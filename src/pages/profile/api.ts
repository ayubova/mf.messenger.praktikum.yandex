import {api} from '../../api/httpTransport.js';
import {router, Routes} from '../../index.js';

const USER_ENDPOINT = 'auth/user';
const LOGOUT_ENDPOINT = 'auth/logout';
const UPDATE_USER_ENDPOINT = 'user/profile';
const CHANGE_PASSWORD_ENDPOINT = 'user/password';
const UPLOAD_AVATAR_ENDPOINT = 'user/profile/avatar';

export const getUser = (): Promise<string> => api.get(USER_ENDPOINT).catch(alert);
export const updateUser = (data: any) => api.put(UPDATE_USER_ENDPOINT, {data}).catch(alert);
export const changePassword = (data: any) => api.put(CHANGE_PASSWORD_ENDPOINT, {data}).catch(alert);
export const logout = () =>
	api
		.post(LOGOUT_ENDPOINT)
		.then(() => router.go(Routes.auth))
		.catch(alert);
export const uploadAvatar = (avatar: File): Promise<string> => {
	const formData = new FormData();
	formData.append('avatar', avatar);
	return api.put(UPLOAD_AVATAR_ENDPOINT, {data: formData}).catch(alert);
};
