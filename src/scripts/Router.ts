import {Route} from './Route';
import {Component} from './Component';
export class Router {
    private routes!: Route[];
    private _rootQuery!: string | null;
    static __instance: Router;
    private history!: History;
    private _currentRoute!: null | Route;

    constructor(rootQuery: string) {
    	if (Router.__instance) {
    		return Router.__instance;
    	}

    	this.routes = [];
    	this.history = window.history;
    	this._currentRoute = null;
    	this._rootQuery = rootQuery;

    	Router.__instance = this;
    }

    use(pathname: string, block: Component<any>, props: Record<string, any>) {
    	const route = new Route(pathname, block, {rootQuery: this._rootQuery, ...props});

    	this.routes.push(route);

    	return this;
    }

    start() {
    	window.onpopstate = (event: any) => {
    		this._onRoute(event.currentTarget?.location.pathname);
    	};

    	this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
    	const route = this.getRoute(pathname);
    	if (!route) {
    		return;
    	}

    	if (this._currentRoute && this._currentRoute !== route) {
    		this._currentRoute.leave();
    	}

    	this._currentRoute = route;
    	route.render();
    }

    go(pathname: string): void {
    	this.history.pushState({}, '', pathname);
    	this._onRoute(pathname);
    }

    back(): void {
    	this.history.back();
    }

    forward(): void {
    	this.history.forward();
    }

    getRoute(pathname: string): Route | undefined {
    	return this.routes.find(route => route.match(pathname));
    }
}
