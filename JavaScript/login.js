let myForm = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let emailErrorText = document.querySelector("#emailErrorText");
let password = document.querySelector("#password");
let passwordErrorText = document.querySelector("#passwordErrorText");
let loginErrorText = document.querySelector("#loginErrorText");
myForm.addEventListener("submit", (e)=>
{
    let forumUser = JSON.parse(localStorage.getItem("forumUser"));
    if(!verifyLogin(forumUser))
        e.preventDefault();
    else
    {
        let date = new Date();
        forumUser.lastConnection = date.toLocaleTimeString();
        localStorage.setItem("forumUser", JSON.stringify(forumUser))
    }
});

/**
 * Verifie les champs du loginForm et affiche les messages nécessaires.
 * @param {any} forumUser L'utilisateur dans le local storage.
 * @return {boolean} true si le form peut être submit, false sinon.
 */
function verifyLogin(forumUser)
{
    let result = true;
    if(forumUser!=null)
    {
        loginErrorText.style.display = "none";
        loginErrorText.textContent = ""
        myForm.style.borderColor = "#000000";
        if(forumUser.email!=email.value)
        {
            email.style.borderColor = "#BB0000";
            emailErrorText.textContent = "L'addresse mail est incorrecte.";
            result = false;
        }
        else
        {
            email.style.borderColor = "#000000";
            emailErrorText.textContent = "";
        }
        if(forumUser.password!=password.value)
        {
            password.style.borderColor = "#BB0000";
            passwordErrorText.textContent = "Le mot de passe est incorrect.";
            result = false;
        }
        else
        {
            password.style.borderColor = "#000000";
            passwordErrorText.textContent = "";
        }
    }
    else
    {
        loginErrorText.style.display = "block";
        loginErrorText.textContent = "Vous n'êtes pas encore enregistrés."
        myForm.style.borderColor = "#BB0000";
        result = false;
    }
    return result;
}