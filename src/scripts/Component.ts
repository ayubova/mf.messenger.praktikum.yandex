import {EventBus} from './EventBus.js';

export class Component<Props> {
	private _meta: {
		tagName: string;
		props: Props;
	};
	private _element: null | HTMLElement = null;
	public eventBus: () => EventBus;
	public props: Props;

	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	};

	/** JSDoc
	 * @param {string} tagName
	 * @param {Object} props
	 *
	 * @returns {void}
	 */
	constructor(tagName: string, props: Props) {
		const eventBus = new EventBus();
		this._meta = {
			tagName,
			props,
		};

		this.props = this._makePropsProxy(props);

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Component.EVENTS.INIT);
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources() {
		this._element = this._createDocumentElement(this._meta.tagName);
	}

	init() {
		this._createResources();
		this.eventBus().emit(Component.EVENTS.FLOW_CDM);
	}

	_componentDidMount() {
		this.componentDidMount();
		this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
	}

	componentDidMount(oldProps?: Props) {}

	_componentDidUpdate(oldProps?: Props, newProps?: Props) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	componentDidUpdate(oldProps?: Props, newProps?: Props) {
		return true;
	}

	setProps = (nextProps: Props) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	_render() {
		const block = this.render();
		// Этот небезопасный метод для упрощения логики
		// Используйте шаблонизатор из npm или напиши свой безопасный
		// Нужно не в строку компилировать (или делать это правильно),
		// либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
		if (this._element) {
			this._element.innerHTML = Handlebars.compile(block)(this.props);
		}
	}

	render() {}

	getContent() {
		return this.element;
	}

	_makePropsProxy(props: Props) {
		// Можно и так передать this
		// Такой способ больше не применяется с приходом ES6+
		const self = this;

		return new Proxy(props as any, {
			get(target, prop) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop, value) {
				target[prop] = value;

				// Запускаем обновление компоненты
				// Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
				self.eventBus().emit(Component.EVENTS.FLOW_CDU, {...target}, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			},
		});
	}

	_createDocumentElement(tagName: string) {
		// Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
		return document.createElement(tagName);
	}

	show() {
		if (this.element) {
			this.element.style.display = 'block';
		}
	}

	hide() {
		if (this.element) {
			this.element.style.display = 'none';
		}
	}
}
