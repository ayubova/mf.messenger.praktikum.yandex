import { api } from '../../api/httpTransport.js';
import { router, Routes } from '../../index.js';
var SIGNUP_ENDPOINT = 'auth/signup';
export var signUp = function (data) { return api.post(SIGNUP_ENDPOINT, { data: data }).then(function () { return router.go(Routes.chat); }); };
