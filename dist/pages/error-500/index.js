import { ErrorBlock } from '../../components/error/index.js';
import { render } from '../../scripts/utils.js';
var error500PageComponent = new ErrorBlock({
    errorCode: '500',
    errorMessage: 'Мы уже фиксим',
    linkButtonText: 'Назад к чатам',
});
render('#root', error500PageComponent);
