// create a array to store input value

let itemsList = [];
let isChecked = [];
let updateItems = 0 + " Items";

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

const activeFunction = (isCheckedValue)=>{
  itemsList.forEach((item)=>{
    if(!isCheckedValue){
      taskBar.innerHTML = ""
      taskFunction(item)
    }
  })
}


const taskBar = document.createElement("div");
taskBar.setAttribute("id", "taskBar");
const taskFunction = (value) => {
  const tasksection = document.createElement("div");
  tasksection.setAttribute("id", "tasksection");

  const taskCkeck = document.createElement("input");
  taskCkeck.type = "checkbox";
  isChecked = taskCkeck.checked;
  taskCkeck.addEventListener("click",()=>{
    isChecked = true;
  })
 
 
  tasksection.append(taskCkeck);

  const taskContent = document.createElement("span");
  taskContent.innerText = value;
  tasksection.append(taskContent);

  const taskDel = document.createElement("img");
  taskDel.src = "cross.png";
  taskDel.addEventListener(
    "click",
    () => {
      tasksection.innerHTML = "";
      tasksection.style.display = "none";
      itemsList = itemsList.filter((item) => item !== value);
      updateItemsFun(itemsList.length);
      console.log(itemsList);
    },
    { once: true }
  );

  tasksection.append(taskDel);

  taskBar.append(tasksection);
};
container.append(taskBar);

// create a footer menu in todos

const footerMenu = document.createElement("div");
footerMenu.setAttribute("id", "footermenu");

const countItems = document.createElement("span");
countItems.classList.add("footerStyle");

const updateItemsFun = (e) => {
  if (e == 0) {
    countItems.innerText = "0 Items";
  } else {
    countItems.innerText = e + " Items";
  }
};

updateItemsFun(itemsList.length);

footerMenu.append(countItems);

const menuBar = document.createElement("div");
menuBar.setAttribute("id", "menuBar");

const allMenu = document.createElement("span");
allMenu.innerText = "All";
allMenu.addEventListener("click",()=>{
  taskBar.innerHTML = ""
  itemsList.forEach((item)=>{
    taskFunction(item)
  })
})
menuBar.append(allMenu);
const activeMenu = document.createElement("span");
activeMenu.innerText = "Active";
activeMenu.addEventListener("click",()=>{
  activeFunction(isChecked)
})
menuBar.append(activeMenu);
const completeMenu = document.createElement("span");
completeMenu.innerText = "Complete";
menuBar.append(completeMenu);

footerMenu.append(menuBar);

const clearBtn = document.createElement("span");
clearBtn.innerText = "Clear";
clearBtn.addEventListener("click", () => {
  itemsList = [];
  updateItemsFun(0);
  taskBar.innerHTML = ""
});

clearBtn.style.cursor = "pointer";

footerMenu.append(clearBtn);

container.append(footerMenu);

// logic hit the enter get the value in inputtag
inputTag.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && inputTag.value !== "") {
    itemsList.push(inputTag.value);
    let lastIndex = itemsList.length - 1;
    isChecked.push(false); // Add a new element to the 'isChecked' array
    itemsList.forEach((item, index) => {
      if (index >= lastIndex) {
        taskFunction(item);
        console.log(isChecked);
        lastIndex = index + 1;
      }
    });
    console.log(itemsList);
    inputTag.value = "";
    updateItemsFun(itemsList.length);
  }
});
