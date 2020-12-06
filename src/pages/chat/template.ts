export default `       
        <main class="chat">
			<div class="chat-list">
				<header class="chat-header">
					<div class="chat-header__profile">Профиль <span class="chat-header__arrow-right"></span></div>
					<div class="search">
						<input class="search__input" placeholder=" " />
						<div class="search__label">
							<img src="src/images/searchIcon.svg" alt='search'>
							<span>Поиск</span>
						</div>
					</div>
                </header>
                
                {{#each chatItems}}
                <div class="chat-item">
                    <div class="chat-item__avatar">
                    {{#if avatar}}
                    <img src={{avatar}} />
                    {{/if}}
                    </div>
					<div class="chat-item__content">
						<div class="chat-item__content-name">{{userName}}</div>
						<div class="chat-item__content-preview">
							{{content}}
						</div>
					</div>
					<div class="chat-item__info">
						<div class="chat-item__date">{{dateTime}}</div>
						<div class="chat-item__counter">{{unreadCounter}}</div>
					</div>
				</div>
                {{/each}}
                </div>
		
			<div class="message-list">
				<header class="message-header">
					<div class="chat-item__avatar message-header__avatar"></div>
					<div class="message-header__name">{{chatUser}}</div>
					<div class="menu menu_opened">
						<div class="menu__users-menu">
							<div class="menu__item">
								<div class="menu__button menu__menu-users__button">
									<img src="src/images/plusIcon.svg" alt="add">
								</div>
								<span class="menu__text"> Добавить пользователя </span>
							</div>
							<div class="menu__item">
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
				<div class="message-container">
                    <div class="message-container__date">19 июня</div>
                    
                    {{#each chatMessages}}
                    <div    
                    class={{#if (isOwner type)}}message-container__sent{{else}}message-container__received{{/if}}>
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
                        <div class="message-container__time">{{dateTime}}</div> 
                       </div>
                       {{/each}} 
                    </div>
				<footer class="message-footer">
					<div class="menu menu_opened">
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
							<input class="search__input" placeholder="Сообщение " />
						</div>
					</div>
					<div class="message-footer__send-button">
						<img src="src/images/sendIcon.svg" alt="send">
					</div>
				</footer>
				</div>
		</main>
    `;
