// let commerceCard = document.querySelector("#commerceCard");
// let cultureCard = document.querySelector("#cultureCard");
// let cuisineCard = document.querySelector("#cuisineCard");

// commerceCard.addEventListener("click", ()=>
// {
//     let forumCategorie = 
//     {
//         backgroundImage: "url(../Images/laitueCaisse.jpg)",
//         title: "Commerce"
//     };
//     localStorage.setItem("forumCategorie", JSON.stringify(forumCategorie))
// });

// cultureCard.addEventListener("click", ()=>
// {
//     let forumCategorie = 
//     {
//         backgroundImage: "url(../Images/laitueChamp.jpg)",
//         title: "Culture"
//     };
//     localStorage.setItem("forumCategorie", JSON.stringify(forumCategorie))
// });

// cuisineCard.addEventListener("click", ()=>
// {
//     let forumCategorie = 
//     {
//         backgroundImage: "url(../Images/laitueCuisine.jpg)",
//         title: "Cuisine"
//     };
//     localStorage.setItem("forumCategorie", JSON.stringify(forumCategorie))
// });

let cards = document.querySelector("#cards");

let cat1 = 
{
    title: "Commerce",
    description: "Découvrez et échangez les meilleures astuces de cuisine avec la laitue, et partagez vos meilleures recettes de laitue ici.",
    backgroundImage: "../Images/laitueCaisse.jpg"
};

let cat2 = 
{
    title: "Culture",
    description: "Découvrez et échangez les méthodes de culture de la laitue, et partagez avec les cultivateurs pour découvrir les secrets de la laitue.",
    backgroundImage: "../Images/laitueChamp.jpg"
};

let cat3 = 
{
    title: "Cuisine",
    description: "Découvrez et échangez avec les marchands, commercants et autres fans de laitue, et partagez vos meilleurs plans pour acheter de la laitue.",
    backgroundImage: "../Images/laitueCuisine.jpg"
};

let categories = [cat1, cat2, cat3];

if(localStorage.getItem("categories")==null)
{
    localStorage.setItem("categories", JSON.stringify(categories));
}

for(let i=0;i<categories.length;i++)
{
    let aCard = cards.appendChild(document.createElement("a"));
    aCard.href = "categorie.html"
    let masterCard = aCard.appendChild(document.createElement("div"));
    masterCard.classList.add("masterCard");
    masterCard.style.backgroundColor = "#eee";
    masterCard.style.backgroundImage = "linear-gradient(#e6e6e6cc, #e6e6e6cc), url(" + categories[i].backgroundImage + ")";
    masterCard.style.backgroundPosition = "center";
    masterCard.style.backgroundSize = "cover";
    let catTitle = masterCard.appendChild(document.createElement("h1"));
    catTitle.textContent = categories[i].title;
    catTitle.style.flex = "0";
    let catDesc = masterCard.appendChild(document.createElement("span"));
    catDesc.textContent = categories[i].description;
    let clickMe = masterCard.appendChild(document.createElement("h2"));
    clickMe.textContent = "Cliquez pour découvir.";
    clickMe.style.flex = "0";
    masterCard.addEventListener("click", ()=>
    {
        localStorage.setItem("currentCategoryIndex", i);
    });
}