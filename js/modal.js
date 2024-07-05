let openModal = document.getElementById("openModal");
let modalInfo = document.getElementById("modal");
let closeModal = document.getElementById("close");

openModal.onclick = function(){
    modalInfo.style.visibility = "visible";
}

closeModal.onclick = function(){
    modalInfo.style.visibility = "hidden";
}

modalInfo.onclick = function(){
    modalInfo.style.visibility = "hidden";
}