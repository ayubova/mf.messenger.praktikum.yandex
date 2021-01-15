import { api } from '../../api/httpTransport.js';
var CHATS_ENDPOINT = 'chats';
var USER_SEARCH_ENDPOINT = 'user/search';
var CHATS_USERS_ENDPOINT = 'chats/users';
export var getChats = function () { return api.get(CHATS_ENDPOINT); };
export var createChat = function (title) { return api.post(CHATS_ENDPOINT, { data: { title: title } }); };
export var searchUser = function (login) { return api.post(USER_SEARCH_ENDPOINT, { data: { login: login } }); };
export var addUsers = function (users, chatId) { return api.put(CHATS_USERS_ENDPOINT, { data: { users: users, chatId: chatId } }); };
export var deleteUsers = function (users, chatId) {
    return api.delete(CHATS_USERS_ENDPOINT, { data: { users: users, chatId: chatId } });
};
