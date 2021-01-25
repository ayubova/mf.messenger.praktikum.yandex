import {render} from './utils';
import {Component} from './Component';
export class Route {
    private _pathname: string;
    private _blockClass: any;
    private _block: null | Component<any>;
    private _props: any;

    constructor(pathname: string, view: Component<any>, props: any) {
    	this._pathname = pathname;
    	this._blockClass = view;
    	this._block = null;
    	this._props = props;
    }

    navigate(pathname: string): void {
    	if (this.match(pathname)) {
    		this._pathname = pathname;
    		this.render();
    	}
    }

    leave() : void {
    	if (this._block) {
    		this._block.hide();
    	}
    }

    match(pathname: string): boolean {
    	return pathname === this._pathname;
    }

    render(): void {
    	if (!this._block) {
    		this._block = new this._blockClass(this._props);
    		render(this._props.rootQuery, this._block!);
    		return;
    	}

    	this._block.show();
    }
}
