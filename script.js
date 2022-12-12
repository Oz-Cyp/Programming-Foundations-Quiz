const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', e => {

    e.preventDefault();

    validateinputs();
});

const validateinputs = () => {
    const FullnameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innertext = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innertext = '';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


if (FullnameValue === '') {
    setError(username, 'Username is required')
} else {
    setSuccess(username);
}

if (emailValue === '') {
    setError(email, 'Email is required')
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Email is not valid')
} else {
    setSuccess(email)
}

if (passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length <= 6) {
    setError(password, 'Password must be. longer than 6 characters')
} else {
    setSuccess(password)
}