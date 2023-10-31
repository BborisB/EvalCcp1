let categories = JSON.parse(localStorage.getItem("categories"));
if(categories==null)
{
    location.href = location.href.replace("subject.html", "forum.html");
}
else
{
    let currentCategory = categories[localStorage.getItem("currentCategoryIndex")];
    if(currentCategory==null)
    {
        location.href = location.href.replace("subject.html", "categorie.html");
    }
    let chat = document.querySelector("#chat");
    let textAreaMessage = document.querySelector("#textAreaMessage");
    let sendBtn = document.querySelector("#sendBtn");

    textAreaMessage.style.height="1em";
        textAreaMessage.style.height = "calc("+textAreaMessage.scrollHeight+"px - 1.245em)";
    textAreaMessage.addEventListener("input", ()=>
    {
        textAreaMessage.style.height="1em";
        textAreaMessage.style.height = "calc("+textAreaMessage.scrollHeight+"px - 1.245em)";
        textAreaMessage.scrollTop = textAreaMessage.scrollHeight;
    });

    //Redimensionne le textArea quand il change de taille (surtout quand il change de largeur).
    function textAreaResize()
    {
        textAreaMessage.style.height="1em";
        textAreaMessage.style.height = "calc("+textAreaMessage.scrollHeight+"px - 1.245em)";
    }
    new ResizeObserver(textAreaResize).observe(textAreaMessage)
       

    textAreaMessage.addEventListener("keydown", (e)=>
    {
        if(e.key=="Enter" && !e.shiftKey)
        {
            e.preventDefault();
            let text = textAreaMessage.value.trim();
            if(text)
            {
                let message = 
                {
                    auteur: currentUser,
                    message: text,
                    date: new Date().toLocaleString()
                };
                addMessage(message);
                textAreaMessage.value = "";
                textAreaMessage.style.height="1em";
                textAreaMessage.style.height= textAreaMessage.scrollHeight+"px";
                chat.scrollTop = chat.scrollHeight;
            }
        }
    });

    sendBtn.addEventListener("click", ()=>
    {
        let text = textAreaMessage.value.trim();
        if(text)
        {
            let message = 
            {
                auteur: currentUser,
                message: text,
                date: new Date().toLocaleString()
            };
            addMessage(message);
            textAreaMessage.value = "";
            textAreaMessage.style.height="1em";
            textAreaMessage.style.height= textAreaMessage.scrollHeight+"px";
            chat.scrollTop = chat.scrollHeight;
        }
    });
    
    /**
     * Crée le message sur la page html.
     * @param {object} message
     * @param {string} message.auteur
     * @param {string} message.message
     * @param {string} message.date
     */
    function addMessage(message)
    {
        let divMessage = chat.appendChild(document.createElement("div"));
        divMessage.classList.add("message");
        let auteurDiv = divMessage.appendChild(document.createElement("div"));
        let auteurName = auteurDiv.appendChild(document.createElement("span"));
        auteurName.style.fontSize = "150%";
        auteurName.style.fontWeight = "bold";
        auteurName.textContent = message.auteur.firstName + " " + message.auteur.lastName + " ";
        auteurDiv.appendChild(document.createElement("span")).textContent = message.date;
        //divMessage.appendChild(document.createElement("h2")).textContent = message.auteur.firstName + " " + message.auteur.lastName;
        let span = divMessage.appendChild(document.createElement("span"));
        span.textContent = message.message;
        span.style.whiteSpace = "pre-wrap";
        span.style.wordBreak = "break-word";
        //divMessage.appendChild(document.createElement("h2")).textContent = message.date;
        chat.append(document.createElement("hr"));
    }
}
