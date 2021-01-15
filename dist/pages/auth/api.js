import { api } from '../../api/httpTransport';
import { router, Routes } from '../../index';
export var SIGN_ENDPOINT = 'auth/signin';
export var signIn = function (data) {
    return api.post(SIGN_ENDPOINT, { data: data }).then(function () { return router.go(Routes.chat); });
};
