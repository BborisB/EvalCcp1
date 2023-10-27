let forumCategorie = JSON.parse(localStorage.getItem("forumCategorie"));
if(forumCategorie!=null)
{
    document.title = forumCategorie.title;
}