let rowContainerE1 = document.getElementById("cartRow");
rowContainerE1.classList.add("cart");
let cartHeading = document.createElement("h1");
cartHeading.textContent = "Add To Cart";
rowContainerE1.appendChild(cartHeading);

let inputContainerE1 = document.createElement("div");
inputContainerE1.classList.add("d-flex", "flex-row", "justify-content-center");
rowContainerE1.appendChild(inputContainerE1);

let inputE1 = document.createElement("input");
inputE1.type = "text";
inputE1.id = "cartItemTextInput";
inputContainerE1.appendChild(inputE1);

let buttonE1 = document.createElement("button");
buttonE1.classList.add("btn", "btn-primary", "btn-add");
buttonE1.textContent = "Add";
buttonE1.id = "addBtn";
inputContainerE1.appendChild(buttonE1);

let listContainerE1 = document.createElement("div");
rowContainerE1.appendChild(listContainerE1);

let listContainerHead = document.createElement("h4");
listContainerHead.textContent = "My Cart items";
listContainerHead.classList.add("list-title");
listContainerE1.appendChild(listContainerHead);

buttonE1.onclick = function() {
    let list = document.createElement("li");
    list.classList.add("list");
    list.textContent = inputE1.value;
    listContainerHead.appendChild(list);


    inputE1.value = "";
}