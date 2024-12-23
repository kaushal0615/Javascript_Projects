const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let x = document.createElement("li");
        x.innerHTML = inputBox.value;
        listContainer.appendChild(x);
        let y = document.createElement("span");
        y.innerHTML = "\u00d7";
        x.appendChild(y);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayData(){
    if(localStorage.getItem("data")){
        listContainer.innerHTML = localStorage.getItem("data");
    } 
}

displayData();