export default `       
<main class="card">
    <h3 class="card__title">Вход</h3>
    <form class="card__form" name="auth" method="post">
        {{#each inputs}}
            <div class="input-field">
            <p class="input-field__error input-field__error_hidden">{{errorMessage}}</p>
            <input type="text" id={{name}} name={{name}} class="input-field__input" placeholder=" " />
            <label for={{name}} class="input-field__label">
                {{label}}
            </label>
            </div>  
        {{/each}}
        <div class="card__form_grow"></div>
          {{> auth-button }}
        <div id="sign-up-link" class="card__link">
            Нет аккаунта?
        </div>
    </form>
</main>
`;
