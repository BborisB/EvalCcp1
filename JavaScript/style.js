let buttons = document.querySelectorAll("button, input[type='reset']");
let submitButtons = document.querySelectorAll("input[type='submit']")
for (let i = 0; i < buttons.length; i++) 
{
    let button = buttons[i];
    button.addEventListener("mousedown", (e) => 
    {
        if (e.button == 0) {
            button.style.backgroundColor = "#000";
            button.style.backgroundImage = "linear-gradient(rgba(0,0,0,1), rgba(136,136,136,1))";
            button.style.color = "#fff";
        }
    });
    button.addEventListener("click", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(rgba(136,136,136,1), rgba(0,0,0,1))";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseleave", () => 
    {
        button.style.backgroundColor = "#eee";
        button.style.backgroundImage = "linear-gradient(rgba(255,255,255,1), rgba(200,200,200,1))";
        button.style.color = "#000";
    });
    button.addEventListener("mouseover", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(rgba(136,136,136,1), rgba(0,0,0,1))";
        button.style.color = "#fff";
    });
}

for (let i = 0; i < submitButtons.length; i++) 
{
    let button = submitButtons[i];
    button.addEventListener("mousedown", (e) => 
    {
        if (e.button == 0) {
            button.style.backgroundColor = "#000";
            button.style.backgroundImage = "linear-gradient(rgba(0,0,0,1), rgba(136,136,136,0.5)), url(../Images/Laitue2.jpg)";
            button.style.backgroundSize = "cover";
            button.style.color = "#fff";
        }
    });
    button.addEventListener("click", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(rgba(136,136,136,0.5), rgba(0,0,0,1)), url(../Images/Laitue2.jpg)";
        button.style.backgroundSize = "cover";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseleave", () => 
    {
        button.style.backgroundColor = "#eee";
        button.style.backgroundImage = "linear-gradient(rgba(136,136,136,1), rgba(0,0,0,1))";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseover", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(rgba(136,136,136,0.5), rgba(0,0,0,1)), url(../Images/Laitue2.jpg)";
        button.style.backgroundSize = "cover";
        button.style.color = "#fff";
    });
}