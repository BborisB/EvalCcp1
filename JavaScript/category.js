let categories = JSON.parse(localStorage.getItem("categories"));
let currentCategoryIndex = parseInt(localStorage.getItem("currentCategoryIndex"))
let categorieTable = document.querySelector("#categorieTable");
let pageTitle = document.querySelector("#pageTitle");
let addBtn = document.querySelector("#addBtn")
let addWindow = document.querySelector("#addWindow");
let addWindowAdd = document.querySelector("#addWindowAdd");
let addWindowCancel = document.querySelector("#addWindowCancel");
let subjectName = document.querySelector("#subjectName");
let subjectNameErrorText = document.querySelector("#subjectNameErrorText");
//let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(categories!=null && currentCategoryIndex!=NaN && currentCategoryIndex<categories.length && currentCategoryIndex>=0)
{
    let currentCategory = categories[currentCategoryIndex];
    document.title = currentCategory.title;
    categorieTable.style.backgroundImage = "linear-gradient(#e6e6e6cc, #e6e6e6cc), url(" + currentCategory.backgroundImage + ")";
    categorieTable.style.backgroundPosition = "center";
    categorieTable.style.backgroundSize = "cover"
    pageTitle.textContent = currentCategory.title;
    for(let i=0;i<currentCategory.subjects.length;i++)
    {
        let subject = currentCategory.subjects[i];
        addSubject(subject);
    }
}
else
{
    location.href = location.href.replace("category.html", "forum.html");
}

addBtn.addEventListener("click", ()=>
{
    addWindow.style.display = "flex";
});

addWindowAdd.addEventListener("click", ()=>
{
    if(subjectName.value=="")
    {
        subjectNameErrorText.textContent = "Entrez un titre.";
        subjectName.style.borderColor = "#BB0000";
    }
    else if(categories!=null || currentCategoryIndex!=NaN)
    {
        let currentCategory = categories[currentCategoryIndex];
        let subject =
        {
            title: subjectName.value,
            id: currentCategory.subjects.length + 1,
            auteur: currentUser.firstName + " " + currentUser.lastName,
            lastComment: "-",
            messages: new Array()
        };
        addSubject(subject);
        currentCategory.subjects.push(subject);
        localStorage.setItem("categories", JSON.stringify(categories));
        addWindow.style.display = "none";
        subjectName.value = "";
    }
});

addWindowCancel.addEventListener("click", ()=>
{
    addWindow.style.display = "none";
    subjectNameErrorText.textContent = "";
    subjectName.style.borderColor = "#000000";
});

/**
 * Ajoute le sujet dans la catégorie dans l'html.
 * @param {Object} subject Le sujet à ajouter.
 * @param {string} subject.title Le titre du sujet.
 * @param {Number} subject.id Le numéro du sujet.
 * @param {string} subject.auteur L'auteur du sujet.
 * @param {string} subject.lastComment La date du dernier commentaire.
 * @param {{string, string, string}[]} subject.messages Les messages sur le sujet (auteur, message, date)
 */
function addSubject(subject)
{
    let row = categorieTable.insertRow();
    let link = document.createElement("a");
    link.href = "subject.html"
    link.textContent = subject.title;
    link.addEventListener("click", ()=>
    {
        localStorage.setItem("currentSubjectId", subject.id);
    });
    row.insertCell().appendChild(document.createTextNode(subject.id));
    row.insertCell().appendChild(link);
    row.insertCell().appendChild(document.createTextNode(subject.lastComment));
    row.insertCell().appendChild(document.createTextNode(subject.auteur));
}