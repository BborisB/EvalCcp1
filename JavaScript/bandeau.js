let bandeauUser = document.querySelector("#bandeauUser");
let bandeauDate = document.querySelector("#bandeauDate");
let bandeauConnection = document.querySelector("#bandeauConnection");
let forumUser = JSON.parse(localStorage.getItem("forumUser"));

if(forumUser!=null)
{
    let date = new Date();
    bandeauUser.textContent = "Bienvenue " + forumUser.firstName + " " + forumUser.lastName;
    bandeauDate.textContent = "Nous sommes le " + date.toLocaleDateString();
    bandeauConnection.textContent = "Connecté le " + forumUser.lastConnection;
}