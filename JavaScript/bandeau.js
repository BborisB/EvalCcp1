let bandeauUser = document.querySelector("#bandeauUser");
let bandeauDate = document.querySelector("#bandeauDate");
let bandeauConnection = document.querySelector("#bandeauConnection");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser!=null)
{
    bandeauUser.textContent = "Bienvenue " + currentUser.firstName + " " + currentUser.lastName;
    bandeauDate.textContent = "Nous sommes le " + new Date().toLocaleDateString();
    bandeauConnection.textContent = "Connecté à " + currentUser.lastConnection;
}
else
{
    if(!location.href.includes("index.html"))
    {
        location.replace("../index.html");
    }
    else
    {
        //dans le cas ou on est deja sur index.html
        bandeauUser.textContent = "";
        bandeauDate.textContent = "Bienvenue. Enregistrez vous, ou connectez vous.";
        bandeauConnection.textContent = "";
        bandeauUser.style.display = "none";
        bandeauConnection.style.display = "none";
    }
}