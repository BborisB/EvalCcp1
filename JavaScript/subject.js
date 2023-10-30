let chat = document.querySelector("#chat");
let textAreaMessage = document.querySelector("#textAreaMessage");
textAreaMessage.style.height="1em";
textAreaMessage.style.height= textAreaMessage.scrollHeight+"px";
textAreaMessage.addEventListener("input", ()=>
{
    textAreaMessage.style.height="1em";
    textAreaMessage.style.height = textAreaMessage.scrollHeight+"px";
});

textAreaMessage.addEventListener("keydown", (e)=>
{
    if(e.key==13)
    {
        
    }
})