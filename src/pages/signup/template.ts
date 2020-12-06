export default `       
    <main class="card">
        <h3 class="card__title">Регистрация</h3>
        <form class="card__form" name="signup" method="post">
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
            {{> signup-button }}
            <a href="" class="card__link">Войти?</a>
        </form>
    </main>
`;
