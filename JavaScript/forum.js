let cards = document.querySelector("#cards");

let cat1 = 
{
    title: "Commerce",
    description: "Découvrez et échangez les meilleures astuces de cuisine avec la laitue, et partagez vos meilleures recettes de laitue ici.",
    backgroundImage: "../Images/laitueCaisse.jpg",
    subjects: [{title: "test", id: 0, auteur: "Boris", lastComment: "XX/XX/XXXX", messages: [{auteur: "Boris", message: "Je ne cuisine pas la laitue, je la mange.", date: "XX/XX/XXXX"}]}]
};

let cat2 = 
{
    title: "Culture",
    description: "Découvrez et échangez les méthodes de culture de la laitue, et partagez avec les cultivateurs pour découvrir les secrets de la laitue.",
    backgroundImage: "../Images/laitueChamp.jpg",
    subjects: [{title: "test", id: 0, auteur: "Boris", lastComment: "XX/XX/XXXX", messages: [{auteur: "Boris", message: "Je ne cuisine pas la laitue, je la mange.", date: "XX/XX/XXXX"}]}]
};

let cat3 = 
{
    title: "Cuisine",
    description: "Découvrez et échangez avec les marchands, commercants et autres fans de laitue, et partagez vos meilleurs plans pour acheter de la laitue.",
    backgroundImage: "../Images/laitueCuisine.jpg",
    subjects: [{title: "test", id: 0, auteur: "Boris", lastComment: "XX/XX/XXXX", messages: [{auteur: "Boris", message: "Je ne cuisine pas la laitue, je la mange.", date: "XX/XX/XXXX"}]}]
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