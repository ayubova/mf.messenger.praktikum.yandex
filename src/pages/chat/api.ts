import {api} from '../../api/httpTransport.js';

const CHATS_ENDPOINT = 'chats';
const USER_SEARCH_ENDPOINT = 'user/search';
const CHATS_USERS_ENDPOINT = 'chats/users';

export const getChats = () => api.get(CHATS_ENDPOINT).catch(alert);
export const createChat = (title: string) => api.post(CHATS_ENDPOINT, {data: {title}}).catch(alert);
export const searchUser = (login: string) => api.post(USER_SEARCH_ENDPOINT, {data: {login}}).catch(alert);
export const addUsers = (users: string[], chatId: number) =>
	api.put(CHATS_USERS_ENDPOINT, {data: {users, chatId}}).catch(alert);
export const deleteUsers = (users: string[], chatId: number) =>
	api.delete(CHATS_USERS_ENDPOINT, {data: {users, chatId}}).catch(alert);
