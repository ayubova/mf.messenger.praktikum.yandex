// @ts-nocheck
import {api} from '../../api/httpTransport';
import {WebSocketTransport} from '../../api/webSocketTransport';

const CHATS_ENDPOINT = 'chats';
const USER_SEARCH_ENDPOINT = 'user/search';
const CHATS_USERS_ENDPOINT = 'chats/users';
const CHAT_TOKEN_ENDPOINT = 'chats/token';
const AUTH_USER_ENDPOINT = 'auth/user';

export const getChats = () => api.get(CHATS_ENDPOINT);
export const getAuthUser = () => api.get(AUTH_USER_ENDPOINT);

export const createChat = (title: string) =>
	api.post(CHATS_ENDPOINT, {data: {title}});

export const searchUser = (login: string) =>
	api.post(USER_SEARCH_ENDPOINT, {data: {login}});

export const addUsers = (users: string[], chatId: number) =>
	api.put(CHATS_USERS_ENDPOINT, {data: {users, chatId}});

export const deleteUsers = (users: string[], chatId: number) =>
	api.delete(CHATS_USERS_ENDPOINT, {data: {users, chatId}});

export const getChatToken = (chatId: number) =>
	api.post(`${CHAT_TOKEN_ENDPOINT}/${chatId}`);

let webSocket = null;

export const initChat = (chatId: number, token: string) => {
	getAuthUser().then(res => {
		const userId = res.id;
		webSocket = new WebSocketTransport({chatId, userId, token});
		webSocket.init();
	});
};

export const sendMessage = (message: string) => webSocket.sendMessage(message);
