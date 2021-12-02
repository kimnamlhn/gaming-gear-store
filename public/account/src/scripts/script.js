const password = document.querySelector('#user_password');
const confirm_password = document.querySelector('#user_cfm_password');
const message = document.querySelector('.message');
const warning_message = document.querySelector('.warning-message');
const submit_register = document.querySelector('#submit-register');
const register_form = document.querySelector('#register-form');

const matching_check = () => {
    if (password.value === confirm_password.value && confirm_password.value.length > 0) {
        password.style = 'background-color: #97ff6b;'
        confirm_password.style = 'background-color: #97ff6b;'
        message.textContent = ``;
    }
    else {
        password.style = 'background-color: #ff6b6b;'
        confirm_password.style = 'background-color: #ff6b6b;'
        message.textContent = `The passwords you typed aren't matching.`
    }
}
password.addEventListener('keyup', matching_check)
confirm_password.addEventListener('keyup', matching_check)
submit_register.addEventListener('click', function(){
    if(password.value === confirm_password.value && 
        confirm_password.value.length > 0 && 
        document.querySelector('#user_email').value.length > 0 &&
        document.querySelector('#user_name').value.length > 0 &&
        document.querySelector('#user_phone').value.length > 0 &&
        document.querySelector('#user_address').value.length > 0){
        warning_message.textContent = ``;
        register_form.submit();
    }
    else {
        warning_message.textContent = `Please fulfill all the requirements.`;
    }
})
