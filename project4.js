
const buttonElement = document.querySelector("#button-element");
const closeElement = document.querySelector("#close-element");


buttonElement.addEventListener("click", () => {
    document.getElementById("sidebar-element").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
})

closeElement.addEventListener("click", () => {
    document.getElementById("sidebar-element").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
})
