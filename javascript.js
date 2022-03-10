document.addEventListener('click', () => {
    checkPassword();
});


let checkPassword = function() {
    let error_text_list = document.querySelectorAll(".error-text");
    
    let passwordInput = document.getElementById("password");
    let confPassWordInput = document.getElementById("password-confirm");
    let password = passwordInput.value;
    let confPassword = confPassWordInput.value;
    if(password !== confPassword) {
        passwordInput.classList.add("error");
        confPassWordInput.classList.add("error");
        error_text_list[0].textContent = "*Passwords do not match";
        error_text_list[1].textContent = "*Passwords do not match";
    } else {
        passwordInput.classList.remove("error");
        confPassWordInput.classList.remove("error");
        error_text_list[0].textContent = "";
        error_text_list[1].textContent = "";
    }
}