export default `       
<div class="profile__container">
    <nav class="left-menu">
        <div class="left-menu__back-button">
            <img src="src/images/backIcon.svg" alt="back" />
        </div>
    </nav>
    <main class="profile__block">
        <div class="profile__avatar">
            <img
                {{#if avatar}}
                    src={{avatar}}
                {{else}}
                    src='src/images/avatarIcon.svg'
                {{/if}}
                alt="avatar"
            />
        </div>
        <p class="profile__name">{{user.first_name}}</p>
        <form class="profile__inputs" id="profile-form" name="profile" 
        {{#if (isChangePassword state)}}
        style="display:none"
        {{/if}}
        >
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
                        value={{value}}
                        {{#if (isViewOnly @root.state)}}
                            disabled
                        {{/if}}
                    />
            </div>
            {{/each}}
            {{#unless (isViewOnly state)}}
                {{> save-button }}
            {{/unless}}
        </form>

        <form class="profile__inputs" id="password-form" name="password"
        {{#unless (isChangePassword state)}}
        style="display:none"
        {{/unless}} >
            {{#each passwordInputs}}
                <div class="profile__input-item">
                <span class="profile__input-item__label">{{label}}</span>
                <p class="input-field__error input-field__error_hidden">{{errorMessage}}</p>
                <input
                    type={{type}}
                    id={{name}}
                    name={{name}}
                    class="profile__input-item__input"
                    placeholder=" "
                    {{#if disabled}}
                    disabled
                    {{/if}}
                />
            </div>
            {{/each}}
            {{> save-button }}
         </form>

         <div class="profile__buttons">
         <div class="profile__input-item">
             <span id="update-user-button" class="profile__input-item__button">Изменить данные</span>
         </div>
         <div class="profile__input-item">
             <span id="change-password-button" class="profile__input-item__button">Изменить пароль</span>
         </div>
         <div class="profile__input-item">
             <span id="logout-button" class="profile__input-item__button profile__input-item__button_hightlighted"
                 >Выйти</span
             >
         </div>
     </div>
    </main>
</div>
`;
