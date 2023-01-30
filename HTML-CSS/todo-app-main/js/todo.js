let listArr = [];
let checkArr = [];
const leftItensCount = document.querySelector(".left-itens");

const itemInput = document.getElementById("create-item");

let btnAll = document.getElementById("all");
let btnActive = document.getElementById("active");
let btnCompleted = document.getElementById("completed");


function textInput() {
    let input = document.getElementById("create-item").value;
    
    if(input != "") {
        listArr.push(input);
        const lastItem = listArr[listArr.length-1];
        addListItems(lastItem);
    }
    document.getElementById("create-item").value = "";
}

itemInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        textInput();
    }
})

function addListItems(lastItem) {
    const listContainer = document.querySelector(".list-container");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    
    const itemRadiobox = document.createElement("div");
    itemRadiobox.classList.add("radiobox-container");
    itemRadiobox.setAttribute("onclick", "checkItem(this)");
    
    const itemParagraph = document.createElement("div");
    itemParagraph.classList.add("paragraph-container");

    const closeContainer = document.createElement("div");
    closeContainer.classList.add("close-container");
    closeContainer.setAttribute("onclick", "clearItem(this)");
    
    const itemText = document.createElement("p");
    itemText.innerText = lastItem;

    listContainer.appendChild(itemContainer);


    itemContainer.appendChild(itemRadiobox);
    itemContainer.appendChild(itemParagraph);
    itemParagraph.appendChild(itemText);
    itemContainer.appendChild(closeContainer);

    leftItensCount.innerText = listArr.length;

    if(listArr.length == 1) {
        btnAll.classList.add("active");
    }
};

function checkItem (element) {
    element.classList.toggle("check-list");
    element.parentNode.classList.toggle("item-done");
    let paragraph = element.nextElementSibling.querySelector("p");

    paragraph.classList.toggle("check-item");

}

function clearItem(element) {

    const valueItem = element.parentNode.textContent;

    let first = listArr.findIndex((x => x === valueItem));

    listArr.splice(first, 1);

    leftItensCount.innerText = listArr.length;

    element.parentNode.remove();
}


function clearList() {

    const listContainer = document.querySelector(".list-container");
    const checkedItem = listContainer.querySelectorAll(".check-list");

    checkedItem.forEach((element) => {
        
        checkArr.push(element.parentNode.textContent);
        element.parentNode.remove();    
    })

    listArr = listArr.filter((item) => {
        return !checkArr.includes(item);
    })
    
    leftItensCount.innerText = listArr.length;
    checkArr = [];
}

function allItens() {
    btnAll.classList.add("active");
    btnActive.classList.remove("active");
    btnCompleted.classList.remove("active");

    const itemContainer = document.querySelectorAll(".item-container");
    
    if(listArr.length > 0) {
        btnAll.classList.add("active");
    } else {
        btnAll.classList.remove("active");
    };

    itemContainer.forEach((element) => {
        element.classList.remove("hidden");
    });
}

function activeItens() {
    btnActive.classList.add("active");
    btnAll.classList.remove("active");
    btnCompleted.classList.remove("active");

    const itensCheck = document.querySelectorAll(".item-container");

    itensCheck.forEach((element) => {
        if(element.classList.contains("item-done")) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    });
}

function completedItens() {
    btnActive.classList.remove("active");
    btnAll.classList.remove("active");
    btnCompleted.classList.add("active");

    const itensCompleted = document.querySelectorAll(".item-container");

    itensCompleted.forEach((element) => {
        if(!element.classList.contains("item-done")) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    });
}

const mediaMobile = window.matchMedia("(max-width: 376px)");

mediaMobile.onchange = (element) => {

    const middleContainer = document.querySelector(".middle-container");
    const footer = document.querySelector(".footer-container");
    const listFooter = document.querySelector(".ul-footer");

    if(element.matches) {
        footer.parentNode.insertBefore(listFooter, footer.nextSibling);
        middleContainer.parentNode.insertBefore(listFooter, middleContainer.nextSibling);
    } else {
        middleContainer.appendChild(listFooter);
        footer.insertBefore(listFooter, footer.children[1]);
    }
}





