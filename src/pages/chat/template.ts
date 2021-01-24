export default `       
        <main class="chat">
			<div class="chat-list">
				<header class="chat-header">
					<div class="chat-header__buttons">
						<div class="chat-header__add">Создать</div>
						<div class="chat-header__profile">Профиль <span class="chat-header__arrow-right"></span></div>
					</div>
					<div class="search">
						<input class="search__input" placeholder=" " />
						<div class="search__label">
							<img src="src/images/searchIcon.svg" alt='search'>
							<span>Поиск</span>
						</div>
					</div>
                </header>
				
                {{#each chatItems}}
                <div class="chat-item" data-chat-item-id={{id}}>
                    <div class="chat-item__avatar">
                    {{#if avatar}}
                    <img src={{avatar}} />
                    {{/if}}
                    </div>
					<div class="chat-item__content">
						<div class="chat-item__content-name">{{title}}</div>
						<div class="chat-item__content-preview">
							placeholder
						</div>
					</div>
					<div class="chat-item__info">
						<div class="chat-item__date"></div>
						<div class="chat-item__counter"></div>
					</div>
				</div>
                {{/each}}
                </div>
                <div id="popup-add-chat" class="popup">
					<div class="popup__content">
					<div class="popup-close-button">
						<img src="src/images/deleteIcon.svg" alt="delete">
					</div>
						<header class="popup__header">Добавить чат</header>
						<form id="add-chat-form" name="add-chat" class="popup-form">
							<div>
								<div class="chat-input__label">Название</div>
								<p class="input-field__error input-field__error_hidden">Введите название</p>
									<input
										type="text"
										name="title"
										class="chat__input-item__input"
										placeholder=" "
									/>
							</div>
							{{> add-button }}
						</form>
					</div>
                </div>	
		{{#if currentChat}}
			<div class="message-list">
				<header class="message-header">
					<div class="chat-item__avatar message-header__avatar"></div>
					<div class="message-header__name">{{currentChat.title}}</div>
					<div class="menu">
						<div class="menu__users-menu">
							<div id="add-user-menu-item" class="menu__item">
								<div class="menu__button menu__menu-users__button">
									<img src="src/images/plusIcon.svg" alt="add">
								</div>
								<span class="menu__text"> Добавить пользователя </span>
							</div>
							<div id="remove-user-menu-item" class="menu__item">
								<div class="menu__button menu__menu-users__button">
									<img src="src/images/deleteIcon.svg" alt="delete">
								</div>
								<span class="menu__text"> Удалить пользователя </span>
							</div>
						</div>
				</div>
					<div class="message-header__button">
						<img src='../src/images/detailsIcon.svg' alt='details'/>
					</div>
				</header>

				<div id="popup-add-user" class="popup">
					<div class="popup__content">
					<div class="popup-close-button">
						<img src="src/images/deleteIcon.svg" alt="delete">
					</div>
					<header class="popup__header">Добавить пользователя</header>
						<form id="add-user-form" name="add-user" class="popup-form">
						<div>
							<div class="chat-input__label">Логин</div>
							<p class="input-field__error input-field__error_hidden">Введите логин</p>
								<input
									type="text"
									name="titile"
									class="chat__input-item__input"
									placeholder=" "
								/>
						</div>
						{{> add-button }}
					</form>
					</div>
				</div>

				<div id="popup-delete-user" class="popup">
					<div class="popup__content">
					<div class="popup-close-button">
						<img src="src/images/deleteIcon.svg" alt="delete">
					</div>
					<header class="popup__header">Удалить пользователя</header>
						<form id="delete-user-form" name="delete-user" class="popup-form">
						<div>
							<div class="chat-input__label">Логин</div>
                            <p class="input-field__error input-field__error_hidden">
                                Введите логин
                            </p>
								<input
									type="text"
									name="titile"
									class="chat__input-item__input"
									placeholder=" "
								/>
						</div>
						{{> delete-button }}
					</form>
					</div>
				</div>
                
<div class="message-container">
<div class="message-container__date"></div>

{{#each chatMessages}}
<div
class={{#if (isAuthUser userId)}}message-container__sent{{else}}message-container__received{{/if}}>
{{#if image}}
<img
class="message-container__image"
src={{image}}
    />
 {{else}}
        {{content}}
        {{/if}}

        {{#if read}}
        <span class="message-container__sent_read">
            <img src="src/images/doubleCheckIcon.svg" alt="checked">
        </span>
        {{/if}}
    <div class="message-container__time">{{time}}</div>
   </div>
   {{/each}}
</div>
<footer class="message-footer">
<div class="menu">
    <div class="message-footer__attach-button">
        <img src="src/images/attachIcon.svg" alt='attach'>
    </div>
    <div class="menu__attach-menu">
        <div class="menu__item">
            <div class="menu__button">
                <img src="src/images/photoIcon.svg" alt="photo">
            </div>
            <span class="menu__text"> Фото или видео </span>
        </div>

        <div class="menu__item">
            <div class="menu__button">
                <img src="src/images/fileIcon.svg" alt="file">

                </div>
            <span class="menu__text"> Файл</span>
        </div>
        <div class="menu__item">
            <div class="menu__button">
                <img src="src/images/locationIcon.svg" alt="location">
            </div>
            <span class="menu__text"> Локация</span>
        </div>
    </div>
</div>
<div class="message-footer__new-message">
    <div class="search">
        <input class="search__input" id="send-message-input" placeholder="Сообщение " />
    </div>
</div>
<div class="message-footer__send-button" id="send-message">
    <img src="src/images/sendIcon.svg" alt="send">
</div>
</footer>
</div>
{{/if}}
		</main>
    `;
