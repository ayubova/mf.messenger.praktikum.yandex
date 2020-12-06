var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '../../scripts/Component.js';
var ErrorBlock = /** @class */ (function (_super) {
    __extends(ErrorBlock, _super);
    function ErrorBlock(props) {
        return _super.call(this, 'div', props) || this;
    }
    ErrorBlock.prototype.render = function () {
        return "\n        <main class=\"error\">\n            <h3 class=\"error__title\">{{errorCode}}</h3>\n            <div class=\"error__message\">{{errorMessage}}</div>\n            <a href=\"\" class=\"error__back-link\">{{linkButtonText}}</a>\n        </main>\n        ";
    };
    return ErrorBlock;
}(Component));
export { ErrorBlock };
