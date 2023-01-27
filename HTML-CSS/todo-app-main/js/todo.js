const listArr = [];

function textInput() {
    let input = document.getElementById("create-item").value;

    document.getElementById("create-item").value = "";

    if(input === "") {
        alert("Adicione algum a fazer")
    } else {
        listArr.push(input);
    }

}