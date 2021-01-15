var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var _a;
import { Router } from './scripts/Router.js';
import { AuthPage } from './pages/auth/index.js';
import { props as authProps } from './pages/auth/constants.js';
import { SignupPage } from './pages/signup/index.js';
import { props as signupProps } from './pages/signup/constants.js';
import ErrorBlock from './components/error/index.js';
import { props as error404Props } from './pages/error-404/constants.js';
import { props as error500Props } from './pages/error-500/constants.js';
import { ProfilePage } from './pages/profile/index.js';
import { props as profileProps } from './pages/profile/constants.js';
import { ChatPage } from './pages/chat/index.js';
import { props as chatProps } from './pages/chat/constants.js';
export var router = new Router('#app');
export var Routes;
(function (Routes) {
    Routes["chat"] = "/";
    Routes["auth"] = "/auth";
    Routes["signup"] = "/signup";
    Routes["error404"] = "/error-404";
    Routes["error500"] = "/error-500";
    Routes["profile"] = "/profile";
})(Routes || (Routes = {}));
export var PAGES = (_a = {},
    _a[Routes.auth] = { component: AuthPage, initialProps: authProps },
    _a[Routes.signup] = { component: SignupPage, initialProps: signupProps },
    _a[Routes.error404] = { component: ErrorBlock, initialProps: error404Props },
    _a[Routes.error500] = { component: ErrorBlock, initialProps: error500Props },
    _a[Routes.profile] = { component: ProfilePage, initialProps: profileProps },
    _a[Routes.chat] = { component: ChatPage, initialProps: chatProps },
    _a);
Object.entries(PAGES).forEach(function (_a) {
    var _b = __read(_a, 2), path = _b[0], _c = _b[1], component = _c.component, initialProps = _c.initialProps;
    return router.use(path, component, initialProps).start();
});
