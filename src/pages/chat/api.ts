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

export const getOldMessages = () => {
	if (WebSocketTransport.instance) {
		WebSocketTransport.instance.sendMessage({content: '0', type: 'get old'});
	}
};

export const initChat = (chatId: number, userId: number, token: string, onMessage: (data: any) => void): void => {
	WebSocketTransport.instance = new WebSocketTransport({chatId, userId, token, onMessage, onOpen: getOldMessages});
	WebSocketTransport.instance.init();
};

export const sendMessage = (content: string) => WebSocketTransport.instance.sendMessage({content, type: 'message'});

