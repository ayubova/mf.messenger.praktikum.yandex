const addHandlerForm = (form, handler) => {
	form.addEventListener('submit', function (evt) {
		evt.preventDefault();
		handler(form);
	});
};
const logFormData = (form) => {
	const formData = new FormData(form);
	for (const pair of formData.entries()) {
		console.log(pair[0] + ': ' + pair[1]);
	}
};
