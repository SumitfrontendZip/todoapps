// create a array to store input value

let itemsList = [];
let updateItems = 0 + " Items"

// Get root element and append container
const root = document.getElementById("root");

const todoTitle = document.createElement("h1");
todoTitle.innerText = "Todos";
root.append(todoTitle);

// create a box

const container = document.createElement("div");
container.setAttribute("id", "container");
root.append(container);

// create input section

const inputSection = document.createElement("div");
inputSection.setAttribute("id", "inputSection");

const arrowImage = document.createElement("img");
arrowImage.src = "arrow.png";
inputSection.append(arrowImage);

const inputTag = document.createElement("input");
inputTag.placeholder = "what needs to be done";
inputSection.append(inputTag);

container.append(inputSection);

// create a function to create a tasksection

const taskBar = document.createElement("div");
taskBar.setAttribute("id", "taskBar");
const taskFunction = (value) => {
  const tasksection = document.createElement("div");
  tasksection.setAttribute("id", "tasksection");

  const taskCkeck = document.createElement("input");
  taskCkeck.type = "checkbox";
  tasksection.append(taskCkeck);

  const taskContent = document.createElement("span");
  taskContent.innerText = value;
  tasksection.append(taskContent);

  const taskDel = document.createElement("img");
  taskDel.src = "cross.png";
  taskDel.addEventListener("click", () => {
    tasksection.innerHTML = "";
    tasksection.style.display = "none";

    itemsList = itemsList.filter(item => item !== value)
    
  });
  tasksection.append(taskDel);

  taskBar.append(tasksection);
};
container.append(taskBar);

// create a footer menu in todos

const footerMenu = document.createElement("div");
footerMenu.setAttribute("id", "footermenu");

const countItems = document.createElement("span");
countItems.classList.add("footerStyle");
countItems.innerText = updateItems;
footerMenu.append(countItems);

const menuBar = document.createElement("div");
menuBar.setAttribute("id", "menuBar");

const allMenu = document.createElement("span");
allMenu.innerText = "All";
menuBar.append(allMenu);
const activeMenu = document.createElement("span");
activeMenu.innerText = "Active";
menuBar.append(activeMenu);
const completeMenu = document.createElement("span");
completeMenu.innerText = "Complete";
menuBar.append(completeMenu);

footerMenu.append(menuBar);

const clearBtn = document.createElement("span");
clearBtn.innerText = "Clear";
clearBtn.style.cursor = "pointer";

footerMenu.append(clearBtn);

container.append(footerMenu);

// logic hit the enter get the value in inputtag

inputTag.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && inputTag.value !== "") {
    itemsList.push(inputTag.value);
    taskFunction(inputTag.value)
    console.log(itemsList)
    inputTag.value = ""
    updateItems = itemsList.length
  }
});
