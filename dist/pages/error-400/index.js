import ErrorBlock from '../../components/error/index.js';
import { render } from '../../scripts/utils.js';
var error404PageComponent = new ErrorBlock({
    errorCode: '404',
    errorMessage: 'Не туда попали',
    linkButtonText: 'Назад к чатам',
});
render('#root', error404PageComponent);
