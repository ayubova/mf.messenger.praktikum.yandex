import { ChatPage } from './component.js';
import { render } from '../../scripts/utils.js';
Handlebars.registerHelper('isOwner', function (value) {
    return value === 'sent';
});
var chatItems = [
    {
        userName: 'Alex',
        avatar: '',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 2,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 3,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 1,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 5,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 1,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 4,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 2,
    },
    {
        userName: 'Alex',
        avatar: 'src/images/cat.jpg',
        content: 'Друзья, у меня для вас особенный выпуск новостей!',
        dateTime: '10:07',
        unreadCounter: 1,
    },
];
var chatMessages = [
    {
        content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        image: '',
        dateTime: '11:09',
        type: 'received',
    },
    {
        content: '',
        image: 'https://media.kg-portal.ru/images/arrival/arrival_5.jpg',
        dateTime: '11:10',
        type: 'received',
    },
    {
        content: 'Круто!!',
        image: '',
        dateTime: '11:40',
        type: 'sent',
        read: true,
    },
];
var chatPageComponent = new ChatPage({
    chatItems: chatItems,
    chatMessages: chatMessages,
    chatUser: 'Alex',
});
render('#root', chatPageComponent);
