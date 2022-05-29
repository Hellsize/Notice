function addTask() {
  let newdiv = document.createElement("div");
  newdiv.innerHTML = "<input type='text' class='txt'>" +  "<img src='/images/check.png' class='checked'>"
  newdiv.className = "NewTask"
  newdiv.id = "draggable-1"
  newdiv.setAttribute("draggable", "true");
  newdiv.setAttribute("ondragstart","onDragStart(event);")
  newdiv.setAttribute("dragend","DragEnd(event);")
  console.log("okay")
  document.getElementById("addTask").appendChild(newdiv)

let task = document.getElementById("complete")
let parent = task.parentNode
  parent.insertBefore(newdiv,task)
}
let el = document.getElementById("addTask");
el.addEventListener("click", addTask, true);


function add_cTask() {
  let newdiv = document.createElement("div");
  newdiv.innerHTML = "<input type='text' class='checks'>" +  "<img src='/images/checked.png' class='checked'>"
  newdiv.className = "NewcTask"
newdiv.setAttribute("draggable", "true");

  console.log("okay")
  document.getElementById("add_cTask").appendChild(newdiv)
  let ctask = document.getElementById("c-complete")
let parents = ctask.parentNode
  parents.insertBefore(newdiv,ctask)
}

function new_section() {
  let btn = document.getElementById("newsection")
  let newdiv = document.createElement("div");
  newdiv.innerHTML = "<h2>Untitled</h2>";
  newdiv.classname = ""

  document.getElementById("newsection").appendChild(newdiv)
  btn.remove;
}

function onDragStart(event) {

  event
    .dataTransfer
    .setData('text/plain', event.target.id);
    event
    .currentTarget
    ev.dataTransfer.dropEffect = "move";
    evt.target.classList.add(`selected`);
  
}



function DragEnd(event){
event
  .currentTarget
  .document.getElementByClass(checked).src='/images/checked.png';
  evt.target.classList.remove(`selected`);
  
}

function onDragOver(event) {
  event.preventDefault();
  event
  .currentTarget
  .document.getElementById(checked).src='/images/checked.png';
  const activeElement = tasksListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(``);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
    currentElement.nextElementSibling :
    currentElement;

  event.setAttribute("z-index","1000")
  

}


function myScript(){
  
  document.getElementById(checked).src='/images/checked.png';

}
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
  .dataTransfer
  .dataTransfer.dropEffect = "move"
  .e.stopPropagation()
  .clearDatа();

  object.addEventListener("dragend", myScript);
}
