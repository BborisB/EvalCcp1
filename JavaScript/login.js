let myForm = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let emailErrorText = document.querySelector("#emailErrorText");
let password = document.querySelector("#password");
let passwordErrorText = document.querySelector("#passwordErrorText");
let loginErrorText = document.querySelector("#loginErrorText");
let forumUsers = JSON.parse(localStorage.getItem("forumUsers"));
if(forumUsers==null)
{
    forumUsers = new Array();
    localStorage.setItem("forumUsers", JSON.stringify(forumUsers));
}
myForm.addEventListener("submit", (e)=>
{
    if(!verifyLogin())
        e.preventDefault();
});

/**
 * Verifie les champs du loginForm et affiche les messages nécessaires.
 * @return {boolean} true si le form peut être submit, false sinon.
 */
function verifyLogin()
{
    var user = forumUsers.find(e=>e.email==email.value);
    if(user==undefined)
    {
        email.style.borderColor = "#BB0000";
        emailErrorText.textContent = "L'addresse mail est incorrecte.";
        password.style.borderColor = "#000000";
        passwordErrorText.textContent = "";
        return false;
    }
    else if(user.password != password.value)
    {
        password.style.borderColor = "#BB0000";
        passwordErrorText.textContent = "Le mot de passe est incorrect.";
        email.style.borderColor = "#000000";
        emailErrorText.textContent = "";
        return false;
    }
    else
    {
        user.lastConnection = new Date().toLocaleTimeString();
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true;
    }
}