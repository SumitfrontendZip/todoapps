// creating a input section add a todo list

const inputsection = document.getElementById("inputsection");
const imgBtn = document.createElement("img");
imgBtn.src = "arrow.png";
inputsection.append(imgBtn);

const input = document.createElement("input");
input.placeholder = "What needs to be done";
inputsection.append(input);

const taskBar = document.getElementById("taskBar");

input.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
      const taskSection = document.createElement("div");
      taskSection.setAttribute("id","taskSection")
  
      const value = input.value;
      
      const checkBtn = document.createElement("img");
      checkBtn.src = "check.png";
      taskSection.append(checkBtn);
      
      const taskTitle = document.createElement("span");
      taskTitle.innerText = value;
      taskSection.append(taskTitle);
      
      const taskcross = document.createElement("img");
      taskcross.src = "cross.png";
      taskSection.append(taskcross);

      taskBar.append(taskSection);

      input.value = ""
    }
  });
  

// create a down bar buttons

const buttonSection = document.getElementById("buttonSection");

const remainText = document.createElement("span");
remainText.innerText = "2 items left";
buttonSection.append(remainText);

const buttons = document.createElement("div");
buttonSection.append(buttons);

const allBtn = document.createElement("span");
allBtn.innerText = "All";
buttons.append(allBtn);
const activeBtn = document.createElement("span");
activeBtn.innerText = "Active";
buttons.append(activeBtn);
const completeBtn = document.createElement("span");
completeBtn.innerText = "Complete";
buttons.append(completeBtn);

const clearBtn = document.createElement("span");
clearBtn.innerText = "Clear";
buttonSection.append(clearBtn);
