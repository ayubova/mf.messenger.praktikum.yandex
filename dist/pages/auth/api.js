import { api } from '../../api/httpTransport.js';
import { router, Routes } from '../../index.js';
export var SIGN_ENDPOINT = 'auth/signin';
export var signIn = function (data) {
    return api.post(SIGN_ENDPOINT, { data: data }).then(function () { return router.go(Routes.chat); });
};
