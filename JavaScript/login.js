let myForm = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let emailErrorText = document.querySelector("#emailErrorText");
let password = document.querySelector("#password");
let passwordErrorText = document.querySelector("#passwordErrorText");
let loginErrorText = document.querySelector("#loginErrorText");
myForm.addEventListener("submit", (e)=>
{
    let user = JSON.parse(localStorage.getItem("user"));
    if(user!=null)
    {
        loginErrorText.textContent = ""
        myForm.style.borderColor = "#000000";
        if(user.email!=email.value)
        {
            email.style.borderColor = "#BB0000";
            emailErrorText.textContent = "L'addresse mail est incorrecte.";
            e.preventDefault();
        }
        else
        {
            email.style.borderColor = "#000000";
            emailErrorText.textContent = "";
        }
        if(user.password!=password.value)
        {
            password.style.borderColor = "#BB0000";
            passwordErrorText.textContent = "Le mot de passe est incorrect.";
            e.preventDefault();
        }
        else
        {
            password.style.borderColor = "#000000";
            passwordErrorText.textContent = "";
        }
    }
    else
    {
        loginErrorText.textContent = "Vous n'êtes pas encore enregistrés."
        myForm.style.borderColor = "#BB0000";
        e.preventDefault();
    }
});