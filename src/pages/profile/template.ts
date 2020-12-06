export default `       
<div class="profile__container">
    <nav class="left-menu">
        <div class="left-menu__back-button">
            <img src="src/images/backIcon.svg" alt="back" />
        </div>
    </nav>
    <main class="profile__block">
        <div class="profile__avatar">
            <img src="src/images/avatarIcon.svg" alt="avatar" />
        </div>
        <p class="profile__name">Иван</p>
        <form class="profile__inputs">
                    {{#each inputs}}
                    <div class="profile__input-item">
                <span class="profile__input-item__label">{{label}}</span>
                <p class="input-field__error input-field__error_hidden">{{errorMessage}}</p>
                <input
                    type={{type}}
                    id={{name}}
                    name={{name}}
                    class="profile__input-item__input"
                    placeholder=" "
                />
            </div>
                    {{/each}}

            <div class="profile__buttons">
                <div class="profile__input-item">
                    <span class="profile__input-item__button">Изменить данные</span>
                </div>
                <div class="profile__input-item">
                    <span class="profile__input-item__button">Изменить пароль</span>
                </div>
                <div class="profile__input-item">
                    <span class="profile__input-item__button profile__input-item__button_hightlighted"
                        >Выйти</span
                    >
                </div>
            </div>
             {{> save-button }}
        </form>

        <div class="popup">
            <div class="popup__content">
                <header class="popup__header">Загрузите файл</header>
                <div class="popup__text">
                    <a class="profile__link" href="">Выбрать файл на компьютере</a>
                </div>
                <button class="button">Поменять</button>
            </div>
        </div>
    </main>
</div>
`;
