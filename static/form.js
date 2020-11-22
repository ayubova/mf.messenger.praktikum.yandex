const authForm = document.forms.auth;

authForm &&
	authForm.addEventListener('submit', function (evt) {
		evt.preventDefault();
		console.log('login: ', authForm.elements.login.value);
		console.log('password: ', authForm.elements.password.value);
	});

const signupForm = document.forms.signup;

signupForm &&
	signupForm.addEventListener('submit', function (evt) {
		evt.preventDefault();
		console.log('first_name: ', signupForm.elements.first_name.value);
		console.log('second_name: ', signupForm.elements.second_name.value);
		console.log('login: ', signupForm.elements.login.value);
		console.log('email: ', signupForm.elements.email.value);
		console.log('password: ', signupForm.elements.password.value);
		console.log('phone: ', signupForm.elements.phone.value);
	});
