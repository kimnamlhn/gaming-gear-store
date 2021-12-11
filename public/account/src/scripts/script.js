const password = document.querySelector('#user_password');
const confirm_password = document.querySelector('#user_cfm_password');
const message = document.querySelector('.message');

const matching_check = () => {
    if (password.value === confirm_password.value && confirm_password.value.length > 0) {
        password.style = 'background-color: #97ff6b;'
        confirm_password.style = 'background-color: #97ff6b;'
    }
    else {
        password.style = 'background-color: #ff6b6b;'
        confirm_password.style = 'background-color: #ff6b6b;'
    }
}
password.addEventListener('keyup', matching_check)
confirm_password.addEventListener('keyup', matching_check)
