let listArr = [];
let checkArr = [];
const leftItensCount = document.querySelector(".left-itens");

const itemInput = document.getElementById("create-item");


function textInput() {
    let input = document.getElementById("create-item").value;
    
    if(input === "") {
        alert("Adicione algum a fazer")
    } else {
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

    console.log(listArr);

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

}