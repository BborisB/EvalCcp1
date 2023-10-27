let commerceCard = document.querySelector("#commerceCard");
let cultureCard = document.querySelector("#cultureCard");
let cuisineCard = document.querySelector("#cuisineCard");

commerceCard.addEventListener("click", ()=>
{
    let forumCategorie = 
    {
        backgroundImage: "url(../Images/laitueCaisse.jpg)",
        title: "Commerce"
    };
    localStorage.setItem("forumCategorie", JSON.stringify(forumCategorie))
});

cultureCard.addEventListener("click", ()=>
{
    let forumCategorie = 
    {
        backgroundImage: "url(../Images/laitueChamp.jpg)",
        title: "Culture"
    };
    localStorage.setItem("forumCategorie", JSON.stringify(forumCategorie))
});

cuisineCard.addEventListener("click", ()=>
{
    let forumCategorie = 
    {
        backgroundImage: "url(../Images/laitueCuisine.jpg)",
        title: "Cuisine"
    };
    localStorage.setItem("forumCategorie", JSON.stringify(forumCategorie))
});