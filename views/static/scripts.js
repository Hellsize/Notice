function addTask() {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "<h5>Untitled</h5>"
    newdiv.className = "NewTask"

    console.log("okay")
    document.getElementById("addTask").appendChild(newdiv)
}
let el = document.getElementById("addTask");
el.addEventListener("click", addTask, true);


function add_cTask() {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "<h5>Untitled</h5>"
    newdiv.className = "NewTask"

    console.log("okay")
    document.getElementById("add_cTask").appendChild(newdiv)
}

function new_section() {
    let btn = document.getElementById("newsection")
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "<h2>Untitled</h2>";
    newdiv.classname = ""

    document.getElementById("newsection").appendChild(newdiv)
    btn.remove;
}



const tasksListElement = document.querySelector(`.tasks`);
const taskElements = tasksListElement.querySelectorAll(`.task`);

for (const task of taskElements) {
    task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;

    return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();

    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains(`tasks__item`);

    if (!isMoveable) {
        return;
    }

    const nextElement = getNextElement(evt.clientY, currentElement);

    if (
        nextElement &&
        activeElement === nextElement.previousElementSibling ||
        activeElement === nextElement
    ) {
        return;
    }

    tasksListElement.insertBefore(activeElement, nextElement);
});