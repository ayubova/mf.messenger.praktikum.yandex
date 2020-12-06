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
import template from './template.js';
import { Component } from '../../scripts/Component.js';
var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(props) {
        return _super.call(this, 'div', props) || this;
    }
    ProfilePage.prototype.componentDidMount = function () { };
    ProfilePage.prototype.render = function () {
        return template;
    };
    return ProfilePage;
}(Component));
export { ProfilePage };
