let cards = document.querySelector("#cards");
let categories = JSON.parse(localStorage.getItem("categories"));
if(categories==null)
{
    let userTest =
    {
        firstName: "Boris",
        lastName: "",
        email: "jaipasdemail@gmail.com"
    }
    let cat1 = 
    {
        title: "Commerce",
        description: "Découvrez et échangez les meilleures astuces de cuisine avec la laitue, et partagez vos meilleures recettes de laitue ici.",
        backgroundImage: "../Images/laitueCaisse.jpg",
        subjects: [{title: "LaitueCommerce", id: 1, auteur: "Boris", lastComment: "XX/XX/XXXX", messages: [{auteur: userTest, message: "Je ne vends pas de laitue, mais j'en mange.", date: "XX/XX/XXXX"}]}]
    };
    let cat2 = 
    {
        title: "Culture",
        description: "Découvrez et échangez les méthodes de culture de la laitue, et partagez avec les cultivateurs pour découvrir les secrets de la laitue.",
        backgroundImage: "../Images/laitueChamp.jpg",
        subjects: [{title: "LaitueCulture", id: 1, auteur: "Boris", lastComment: "XX/XX/XXXX", messages: [{auteur: userTest, message: "Je ne cultive pas la laitue, mais je la mange.", date: "XX/XX/XXXX"}]}]
    };
    let cat3 = 
    {
        title: "Cuisine",
        description: "Découvrez et échangez avec les marchands, commercants et autres fans de laitue, et partagez vos meilleurs plans pour acheter de la laitue.",
        backgroundImage: "../Images/laitueCuisine.jpg",
        subjects: [{title: "LaitueCuisine", id: 1, auteur: "Boris", lastComment: "XX/XX/XXXX", messages: [{auteur: userTest, message: "Je ne cuisine pas la laitue, mais je la mange.", date: "XX/XX/XXXX"}]}]
    };
    categories = [cat1, cat2, cat3];
    localStorage.setItem("categories", JSON.stringify(categories));
}
for(let i=0;i<categories.length;i++)
{
    let aCard = cards.appendChild(document.createElement("a"));
    aCard.href = "category.html"
    let masterCard = aCard.appendChild(document.createElement("div"));
    masterCard.classList.add("masterCard");
    masterCard.style.backgroundColor = "#eee";
    masterCard.style.backgroundImage = "linear-gradient(#e6e6e6cc, #e6e6e6cc), url(" + categories[i].backgroundImage + ")";
    masterCard.style.backgroundPosition = "center";
    masterCard.style.backgroundSize = "cover";
    masterCard.appendChild(document.createElement("h1")).textContent = categories[i].title;
    masterCard.appendChild(document.createElement("span")).textContent = categories[i].description;;
    masterCard.appendChild(document.createElement("h2")).textContent = "Cliquez pour découvir.";
    masterCard.addEventListener("click", ()=>
    {
        localStorage.setItem("currentCategoryIndex", i);
    });
}