export default "       \n        <main class=\"chat\">\n\t\t\t<div class=\"chat-list\">\n\t\t\t\t<header class=\"chat-header\">\n\t\t\t\t\t<div class=\"chat-header__buttons\">\n\t\t\t\t\t\t<div class=\"chat-header__add\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</div>\n\t\t\t\t\t\t<div class=\"chat-header__profile\">\u041F\u0440\u043E\u0444\u0438\u043B\u044C <span class=\"chat-header__arrow-right\"></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"search\">\n\t\t\t\t\t\t<input class=\"search__input\" placeholder=\" \" />\n\t\t\t\t\t\t<div class=\"search__label\">\n\t\t\t\t\t\t\t<img src=\"src/images/searchIcon.svg\" alt='search'>\n\t\t\t\t\t\t\t<span>\u041F\u043E\u0438\u0441\u043A</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </header>\n\t\t\t\t\n                {{#each chatItems}}\n                <div class=\"chat-item\" data-chat-item-id={{id}}>\n                    <div class=\"chat-item__avatar\">\n                    {{#if avatar}}\n                    <img src={{avatar}} />\n                    {{/if}}\n                    </div>\n\t\t\t\t\t<div class=\"chat-item__content\">\n\t\t\t\t\t\t<div class=\"chat-item__content-name\">{{title}}</div>\n\t\t\t\t\t\t<div class=\"chat-item__content-preview\">\n\t\t\t\t\t\t\tplaceholder\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"chat-item__info\">\n\t\t\t\t\t\t<div class=\"chat-item__date\"></div>\n\t\t\t\t\t\t<div class=\"chat-item__counter\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                {{/each}}\n                </div>\n\t\t{{#if currentChat}}\n\t\t\t<div class=\"message-list\">\n\t\t\t\t<header class=\"message-header\">\n\t\t\t\t\t<div class=\"chat-item__avatar message-header__avatar\"></div>\n\t\t\t\t\t<div class=\"message-header__name\">{{currentChat.title}}</div>\n\t\t\t\t\t<div class=\"menu\">\n\t\t\t\t\t\t<div class=\"menu__users-menu\">\n\t\t\t\t\t\t\t<div id=\"add-user-menu-item\" class=\"menu__item\">\n\t\t\t\t\t\t\t\t<div class=\"menu__button menu__menu-users__button\">\n\t\t\t\t\t\t\t\t\t<img src=\"src/images/plusIcon.svg\" alt=\"add\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"menu__text\"> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F </span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"remove-user-menu-item\" class=\"menu__item\">\n\t\t\t\t\t\t\t\t<div class=\"menu__button menu__menu-users__button\">\n\t\t\t\t\t\t\t\t\t<img src=\"src/images/deleteIcon.svg\" alt=\"delete\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"menu__text\"> \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F </span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"message-header__button\">\n\t\t\t\t\t\t<img src='../src/images/detailsIcon.svg' alt='details'/>\n\t\t\t\t\t</div>\n\t\t\t\t</header>\n\n\t\t\t\t<div id=\"popup-add-user\" class=\"popup\">\n\t\t\t\t\t<div class=\"popup__content\">\n\t\t\t\t\t<div class=\"popup-close-button\">\n\t\t\t\t\t\t<img src=\"src/images/deleteIcon.svg\" alt=\"delete\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<header class=\"popup__header\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</header>\n\t\t\t\t\t\t<form id=\"add-user-form\" name=\"add-user\" class=\"popup-form\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"chat-input__label\">\u041B\u043E\u0433\u0438\u043D</div>\n\t\t\t\t\t\t\t<p class=\"input-field__error input-field__error_hidden\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D</p>\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\tname=\"titile\"\n\t\t\t\t\t\t\t\t\tclass=\"chat__input-item__input\"\n\t\t\t\t\t\t\t\t\tplaceholder=\" \"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{> add-button }}\n\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"popup-delete-user\" class=\"popup\">\n\t\t\t\t\t<div class=\"popup__content\">\n\t\t\t\t\t<div class=\"popup-close-button\">\n\t\t\t\t\t\t<img src=\"src/images/deleteIcon.svg\" alt=\"delete\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<header class=\"popup__header\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</header>\n\t\t\t\t\t\t<form id=\"delete-user-form\" name=\"delete-user\" class=\"popup-form\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"chat-input__label\">\u041B\u043E\u0433\u0438\u043D</div>\n\t\t\t\t\t\t\t<p class=\"input-field__error input-field__error_hidden\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D</p>\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\tname=\"titile\"\n\t\t\t\t\t\t\t\t\tclass=\"chat__input-item__input\"\n\t\t\t\t\t\t\t\t\tplaceholder=\" \"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{> delete-button }}\n\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\t\t\t\t<div id=\"popup-add-chat\" class=\"popup\">\n\t\t\t\t\t<div class=\"popup__content\">\n\t\t\t\t\t<div class=\"popup-close-button\">\n\t\t\t\t\t\t<img src=\"src/images/deleteIcon.svg\" alt=\"delete\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<header class=\"popup__header\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0442</header>\n\t\t\t\t\t\t<form id=\"add-chat-form\" name=\"add-chat\" class=\"popup-form\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"chat-input__label\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</div>\n\t\t\t\t\t\t\t\t<p class=\"input-field__error input-field__error_hidden\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</p>\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tname=\"title\"\n\t\t\t\t\t\t\t\t\t\tclass=\"chat__input-item__input\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\" \"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{> add-button }}\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\n\t\t</main>\n    ";
// <div class="message-container">
//                 <div class="message-container__date">19 июня</div>
//                 {{#each chatMessages}}
//                 <div
//                 class={{#if (isOwner type)}}message-container__sent{{else}}message-container__received{{/if}}>
//                 {{#if image}}
//                 <img
//                 class="message-container__image"
//                 src={{image}}
//                     />
//                  {{else}}
//                         {{content}}
//                         {{/if}}
//                         {{#if read}}
//                         <span class="message-container__sent_read">
// 							<img src="src/images/doubleCheckIcon.svg" alt="checked">
//                         </span>
//                         {{/if}}
//                     <div class="message-container__time">{{dateTime}}</div>
//                    </div>
//                    {{/each}}
//                 </div>
// 			<footer class="message-footer">
// 				<div class="menu menu_opened">
// 					<div class="message-footer__attach-button">
// 						<img src="src/images/attachIcon.svg" alt='attach'>
// 					</div>
// 					<div class="menu__attach-menu">
// 						<div class="menu__item">
// 							<div class="menu__button">
// 								<img src="src/images/photoIcon.svg" alt="photo">
// 							</div>
// 							<span class="menu__text"> Фото или видео </span>
// 						</div>
// 						<div class="menu__item">
// 							<div class="menu__button">
// 								<img src="src/images/fileIcon.svg" alt="file">
//                                 </div>
// 							<span class="menu__text"> Файл</span>
// 						</div>
// 						<div class="menu__item">
// 							<div class="menu__button">
// 								<img src="src/images/locationIcon.svg" alt="location">
// 							</div>
// 							<span class="menu__text"> Локация</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="message-footer__new-message">
// 					<div class="search">
// 						<input class="search__input" placeholder="Сообщение " />
// 					</div>
// 				</div>
// 				<div class="message-footer__send-button">
// 					<img src="src/images/sendIcon.svg" alt="send">
// 				</div>
// 			</footer>
// 			</div>
