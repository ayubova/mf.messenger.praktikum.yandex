import { api } from '../../api/httpTransport.js';
import { router, Routes } from '../../index.js';
var USER_ENDPOINT = 'auth/user';
var LOGOUT_ENDPOINT = 'auth/logout';
var UPDATE_USER_ENDPOINT = 'user/profile';
var CHANGE_PASSWORD_ENDPOINT = 'user/password';
var UPLOAD_AVATAR_ENDPOINT = 'user/profile/avatar';
export var getUser = function () { return api.get(USER_ENDPOINT); };
export var updateUser = function (data) { return api.put(UPDATE_USER_ENDPOINT, { data: data }); };
export var changePassword = function (data) { return api.put(CHANGE_PASSWORD_ENDPOINT, { data: data }); };
export var logout = function () { return api.post(LOGOUT_ENDPOINT).then(function () { return router.go(Routes.auth); }); };
export var uploadAvatar = function (avatar) {
    var formData = new FormData();
    formData.append('avatar', avatar);
    return api.put(UPLOAD_AVATAR_ENDPOINT, { data: formData });
};
