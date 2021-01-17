import {api} from '../../api/httpTransport';

const CHATS_ENDPOINT = 'chats';
const USER_SEARCH_ENDPOINT = 'user/search';
const CHATS_USERS_ENDPOINT = 'chats/users';

export const getChats = () => api.get(CHATS_ENDPOINT);
export const createChat = (title: string) => api.post(CHATS_ENDPOINT, {data: {title}});
export const searchUser = (login: string) => api.post(USER_SEARCH_ENDPOINT, {data: {login}});
export const addUsers = (users: string[], chatId: number) => api.put(CHATS_USERS_ENDPOINT, {data: {users, chatId}});
export const deleteUsers = (users: string[], chatId: number) =>
	api.delete(CHATS_USERS_ENDPOINT, {data: {users, chatId}});
