// creating a input section add a todo list


const inputsection = document.getElementById("inputsection");
const imgBtn = document.createElement("img");
imgBtn.src = "arrow.png"
inputsection.append(imgBtn)


const input = document.createElement("input")
input.placeholder = "What needs to be done"
inputsection.append(input)

// create a task bar 

const taskSection = document.getElementById("taskSection");
const checkBtn = document.createElement("img");
checkBtn.src ="check.png"
taskSection.append(checkBtn)

const taskTitle = document.createElement("span");
taskTitle.innerText = "Go to gym"
taskSection.append(taskTitle)


const taskcross = document.createElement("img");
taskcross.src = "cross.png"
taskSection.append(taskcross)


