import {api} from '../../api/httpTransport';
import {router, Routes} from '../../index';
import {User, ChangePasswordPayload} from './constants';

const USER_ENDPOINT = 'auth/user';
const LOGOUT_ENDPOINT = 'auth/logout';
const UPDATE_USER_ENDPOINT = 'user/profile';
const CHANGE_PASSWORD_ENDPOINT = 'user/password';
const UPLOAD_AVATAR_ENDPOINT = 'user/profile/avatar';

export const getUser = (): Promise<User> => api.get(USER_ENDPOINT);
export const updateUser = (data: User): Promise<User> => api.put(UPDATE_USER_ENDPOINT, {data});
export const changePassword = (data: ChangePasswordPayload) => api.put(CHANGE_PASSWORD_ENDPOINT, {data});
export const logout = () => api.post(LOGOUT_ENDPOINT).then(() => router.go(Routes.auth));

export const uploadAvatar = (avatar: File): Promise<User> => {
	const formData = new FormData();
	formData.append('avatar', avatar);
	return api.put(UPLOAD_AVATAR_ENDPOINT, {data: formData});
};
