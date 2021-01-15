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
import { Router } from './scripts/Router';
import { AuthPage } from './pages/auth/index';
import { props as authProps } from './pages/auth/constants';
import { SignupPage } from './pages/signup/index';
import { props as signupProps } from './pages/signup/constants';
import ErrorBlock from './components/error/index';
import { props as error404Props } from './pages/error-404/constants';
import { props as error500Props } from './pages/error-500/constants';
import { ProfilePage } from './pages/profile/index';
import { props as profileProps } from './pages/profile/constants';
import { ChatPage } from './pages/chat/index';
import { props as chatProps } from './pages/chat/constants';
export var router = new Router('#app');
export var Routes;
(function (Routes) {
    Routes["auth"] = "/auth";
    Routes["signup"] = "/signup";
    Routes["error404"] = "/error-404";
    Routes["error500"] = "/error-500";
    Routes["profile"] = "/profile";
    Routes["chat"] = "/chat";
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
