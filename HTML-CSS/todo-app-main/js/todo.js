let listArr = [];

function textInput() {
    let input = document.getElementById("create-item").value;

    document.getElementById("create-item").value = "";

    if(input === "") {
        alert("Adicione algum a fazer")
    } else {
        listArr.push(input);
        const lastItem = listArr[listArr.length-1];
        addListItems(lastItem);
    }
}

function addListItems(lastItem) {
    const listContainer = document.querySelector(".list-container");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    
    const itemRadiobox = document.createElement("div");
    itemRadiobox.classList.add("radiobox-container");
    
    const itemParagraph = document.createElement("div");
    itemParagraph.classList.add("paragraph-container");

    const closeContainer = document.createElement("div");
    closeContainer.classList.add("close-container");
    closeContainer.setAttribute("onclick", "clearItem(element)");
    
    const itemText = document.createElement("p");
    itemText.innerText = lastItem;

    listContainer.appendChild(itemContainer);


    itemContainer.appendChild(itemRadiobox);
    itemContainer.appendChild(itemParagraph);
    itemParagraph.appendChild(itemText);
    itemContainer.appendChild(closeContainer);

    let leftItensCount = document.querySelector(".left-itens");
    leftItensCount.innerText = listArr.length;

    console.log(listArr);

};


function clearItem(element) {

    // const valueParagraph = document.querySelectorAll(".paragraph-container");

    // console.log(valueParagraph);

    // const closeContainer = document.getElementsByClassName("close-container");

    element

    // const itemContainer = closeContainer.parentNode;
    
    // closeContainer.remove();
    // itemContainer.remove();
}


function clearList() {

    const listContainer = document.querySelector(".list-container");
    listArr = [];

    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
}


