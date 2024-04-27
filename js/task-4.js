const LoginForm = document.querySelector(".login-form");
function funEvent(event) {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    const formObj = {
        email: formElem.email.value.trim(),
        password: formElem.password.value.trim(),
    };
    if(formObj.email && formObj.password) {
        console.log(formObj);
        LoginForm.reset();
    }
    else {
        alert("All form fields must be filled in");
    }
}
const passwordInput = LoginForm.elements[1];
function placeholderActive() {
passwordInput.setAttribute('placeholder', 'type area');
}
function placeholderOff(){
    passwordInput.setAttribute('placeholder', '');
}
LoginForm.addEventListener("submit", funEvent);;
passwordInput.addEventListener("click", "placeholderActive");
passwordInput.addEventListener("blur"," placeholderOff");