// creating a input section add a todo list


const inputsection = document.getElementById("inputsection");
const imgBtn = document.createElement("img");
imgBtn.src = "arrow.png"
inputsection.append(imgBtn)


const input = document.createElement("input")
input.placeholder = "What needs to be done"
inputsection.append(input)
