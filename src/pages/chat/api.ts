import {api} from '../../api/httpTransport.js';

const CHATS_ENDPOINT = 'chats';

export const getChats = () => api.get(CHATS_ENDPOINT).catch(alert);
export const createChat = (title: string) => api.post(CHATS_ENDPOINT, {data: {title}}).catch(alert);
