import {api} from '../../api/httpTransport.js';

const CHATS_ENDPOINT = 'chats';
const USER_SEARCH_ENDPOINT = 'user/search';
const CHATS_USERS_ENDPOINT = 'chats/users';

export const getChats = () => api.get(CHATS_ENDPOINT).catch((err: any) => alert(JSON.stringify(err)));
export const createChat = (title: string) =>
	api.post(CHATS_ENDPOINT, {data: {title}}).catch((err: any) => alert(JSON.stringify(err)));
export const searchUser = (login: string) =>
	api.post(USER_SEARCH_ENDPOINT, {data: {login}}).catch((err: any) => alert(JSON.stringify(err)));
export const addUsers = (users: string[], chatId: number) =>
	api.put(CHATS_USERS_ENDPOINT, {data: {users, chatId}}).catch((err: any) => alert(JSON.stringify(err)));
export const deleteUsers = (users: string[], chatId: number) =>
	api.delete(CHATS_USERS_ENDPOINT, {data: {users, chatId}}).catch((err: any) => alert(JSON.stringify(err)));
