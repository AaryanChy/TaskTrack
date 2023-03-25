const button = document.querySelector(".add");
const section = document.querySelector(".section");
const input = document.querySelector(".input");
const container = document.querySelector(".container");
const errorMessage = document.querySelector("#error-message");

const taskArray = [];

const storeTask = () => {
  taskArray.push(input.value);
  console.log(taskArray);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    section.innerHTML += `<div class= "card">
      <h1>${input.value}</h1> <button>delete</button>
    </div>`;
    storeTask();
    input.value = "";
    errorMessage.innerHTML = "";
  } else {
    errorMessage.innerHTML = "Please enter a task.";
  }
});
