let buttons = document.querySelectorAll("button, input[type='reset']");
let submitButtons = document.querySelectorAll("input[type='submit']")
for (let i = 0; i < buttons.length; i++) 
{
    let button = buttons[i];
    button.addEventListener("mousedown", (e) => 
    {
        if (e.button == 0) {
            button.style.backgroundColor = "#000";
            button.style.backgroundImage = "linear-gradient(#000, #888)";
            button.style.color = "#fff";
        }
    });
    button.addEventListener("click", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(#888, #000)";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseleave", () => 
    {
        button.style.backgroundColor = "#eee";
        button.style.backgroundImage = "linear-gradient(#fff, #bbb)";
        button.style.color = "#000";
    });
    button.addEventListener("mouseover", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(#888, #000)";
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
            button.style.backgroundImage = "linear-gradient(#000, #88888880), url(../Images/Laitue2.jpg)";
            button.style.backgroundSize = "cover";
            button.style.color = "#fff";
        }
    });
    button.addEventListener("click", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(#88888880, #000), url(../Images/Laitue2.jpg)";
        button.style.backgroundSize = "cover";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseleave", () => 
    {
        button.style.backgroundColor = "#eee";
        button.style.backgroundImage = "linear-gradient(#888, #000)";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseover", () => 
    {
        button.style.backgroundColor = "#222";
        button.style.backgroundImage = "linear-gradient(#88888880, #000), url(../Images/Laitue2.jpg)";
        button.style.backgroundSize = "cover";
        button.style.color = "#fff";
    });
}