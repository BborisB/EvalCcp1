let forumCategorie = JSON.parse(localStorage.getItem("forumCategorie"));
let categorieTable = document.querySelector("#categorieTable");
let pageTitle = document.querySelector("#pageTitle");
let addBtn = document.querySelector("#addBtn")
let addWindow = document.querySelector("#addWindow");
let addWindowAdd = document.querySelector("#addWindowAdd");
let addWindowCancel = document.querySelector("#addWindowCancel");
let subjectName = document.querySelector("#subjectName");
if(forumCategorie!=null)
{
    document.title = forumCategorie.title;
    categorieTable.style.backgroundImage = "linear-gradient(#e6e6e6cc, #e6e6e6cc), " + forumCategorie.backgroundImage;
    categorieTable.style.backgroundPosition = "center";
    categorieTable.style.backgroundSize = "cover"
    pageTitle.textContent = forumCategorie.title;
}

addBtn.addEventListener("click", ()=>
{
    addWindow.style.display = "flex";
    // categorieTable.row.insertCell().append(document.createTextNode(produit["articleName"]));
});

addWindowAdd.addEventListener("click", ()=>
{
    categorieTable.row.insertCell().append(document.createTextNode(produit["articleName"]));
});

addWindowCancel.addEventListener("click", ()=>
{
    addWindow.style.display = "none";
});

