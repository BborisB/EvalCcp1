// let forumCategorie = JSON.parse(localStorage.getItem("forumCategorie"));
let categories = JSON.parse(localStorage.getItem("categories"));
let currentCategoryIndex = parseInt(localStorage.getItem("currentCategoryIndex"))
let categorieTable = document.querySelector("#categorieTable");
let pageTitle = document.querySelector("#pageTitle");
let addBtn = document.querySelector("#addBtn")
let addWindow = document.querySelector("#addWindow");
let addWindowAdd = document.querySelector("#addWindowAdd");
let addWindowCancel = document.querySelector("#addWindowCancel");
let subjectName = document.querySelector("#subjectName");
if(categories!=null && currentCategoryIndex!=NaN)
{
    let currentCategory = categories[currentCategoryIndex];
    document.title = currentCategory.title;
    categorieTable.style.backgroundImage = "linear-gradient(#e6e6e6cc, #e6e6e6cc), url(" + currentCategory.backgroundImage + ")";
    categorieTable.style.backgroundPosition = "center";
    categorieTable.style.backgroundSize = "cover"
    pageTitle.textContent = currentCategory.title;
    for(let i=0;i<currentCategory.subjects.length;i++)
    {
        //load categories into the table
    }
}

addBtn.addEventListener("click", ()=>
{
    addWindow.style.display = "flex";
});

addWindowAdd.addEventListener("click", ()=>
{
    categorieTable.row.insertCell().append(document.createTextNode(produit["articleName"]));
});

addWindowCancel.addEventListener("click", ()=>
{
    addWindow.style.display = "none";
});

