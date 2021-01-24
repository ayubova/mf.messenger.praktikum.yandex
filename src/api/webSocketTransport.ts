// @ts-nocheck
import {WEBSOCKET_URL} from './constants';

export class WebSocketTransport {
	constructor({chatId, userId, token, onMessage, onOpen}) {
		this._chatId = chatId;
		this._userId = userId;
		this._token = token;
		this.handleMessage = onMessage;
		this.handleOpen = onOpen;
		this.socket = new WebSocket(`${WEBSOCKET_URL}/chats/${this._userId}/${this._chatId}/${this._token}`);
	}

static instance = null;

	init = () => {
		this.socket.addEventListener('open', () => {
			console.log('Соединение установлено');
			this.handleOpen();
		});
		this.socket.addEventListener('close', event => {
			if (event.wasClean) {
				console.log('Соединение закрыто чисто');
			} else {
				console.log('Обрыв соединения');
			}

			console.log(`Код: ${event.code} | Причина: ${event.reason}`);
		});

		this.socket.addEventListener('message', event => {
			this.handleMessage(JSON.parse(event.data));
			console.log('Получены данные', event.data);
		});

		this.socket.addEventListener('error', event => {
			console.log('Ошибка', event);
		});
	}

	sendMessage = ({content, type}) => {
		this.socket.send(JSON.stringify({
			content,
			type
		}));
	}
}
