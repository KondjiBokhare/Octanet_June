
const inputBox = document.querySelector("#input");
const taskList = document.querySelector("#taskList");
const checked = document.querySelector(".checked");

function addTask() {
  if (inputBox.value === "") {
    alert("You must fill some task...");
  } else {
    let li = document.createElement("li");
    let toggle = document.createElement("input");
    toggle.setAttribute("type","checkbox");
    let para = document.createElement("p");
    para.innerHTML = inputBox.value;
    taskList.appendChild(li);
    li.appendChild(toggle);
    li.appendChild(para);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskList.addEventListener("click", function(e){
   if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",taskList.innerHTML);
}

function showTask(){
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();