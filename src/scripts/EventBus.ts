export class EventBus {
	private _listeners: Record<string, ((...args: any[]) => void)[]>;
	constructor() {
		this._listeners = {};
	}

	on(event: string, callback: () => void) {
		if (!this._listeners[event]) {
			this._listeners[event] = [];
		}

		this._listeners[event].push(callback);
	}

	off(event: string, callback: () => void) {
		if (!this._listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this._listeners[event] = this._listeners[event].filter(listener => listener !== callback);
	}

	emit(event: string, ...args: ((...args: any[]) => void)[]) {
		if (!this._listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this._listeners[event].forEach(function (listener) {
			listener(...args);
		});
	}
}
